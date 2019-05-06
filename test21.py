import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

shadesData = [
    [86, 2, 3, 33, 7, 'Maybelline'],
    [55, 3, 5, 7, 8, 'Dior'],
    [100, 1, 5, 9, 5, 'Fenty'],
    [32, 13, 5, 8, 6, 'Revlon'],
    [16, 15, 7, 4, 3, 'MakeUp'],
]

header = ["H", "S", "V", "L", "group", "brand"]


def unique_vals(rows, col):
    return set([row[col] for row in rows])


def assignTraningSet():
    shadesData = pd.read_csv('C:\\Users\\acer\\Desktop\\SDGB\\new dataset\\shades.csv')
    shadesTS = []
    count = 0
    for index, row in shadesData.iterrows():
        shadesTemp = []
        attr_b = str(row['brand'])
        attr_h = row['H']
        attr_s = row['S']
        attr_v = row['V']
        attr_l = row['L']
        attr_group = row['group']
        shadesTemp.append(attr_h)
        shadesTemp.append(attr_s)
        shadesTemp.append(attr_v)
        shadesTemp.append(attr_l)
        shadesTemp.append(attr_group)
        shadesTemp.append(attr_b)
        shadesTS.append(shadesTemp)


    return shadesTS


def add(x, y):
    x.append(y)
    return x


def class_counts(rows):
    counts = {}
    for row in rows:
        label = row[-1]
        if label not in counts:
            counts[label] = 0
        counts[label] += 1
    return counts


def is_numeric(value):
    return isinstance(value, int) or isinstance(value, float)


class Question:

    def __init__(self, column, value):
        self.column = column
        self.value = value

    def match(self, example):
        val = example[self.column]
        if is_numeric(val):
            return val >= self.value
        else:
            return val == self.value

    def __repr__(self):
        condition = "=="
        if is_numeric(self.value):
            condition = ">="
        return "Is %s %s %s?" % (
            header[self.column], condition, str(self.value))


def partition(rows, question):
    true_rows, false_rows = [], []
    for row in rows:
        if question.match(row):
            true_rows.append(row)
        else:
            false_rows.append(row)
    return true_rows, false_rows


def gini(rows):
    counts = class_counts(rows)
    impurity = 1
    for lbl in counts:
        prob_of_lbl = counts[lbl] / float(len(rows))
        impurity -= prob_of_lbl ** 2
    return impurity


def info_gain(left, right, current_uncertainty):
    p = float(len(left)) / (len(left) + len(right))
    return current_uncertainty - p * gini(left) - (1 - p) * gini(right)


def find_best_split(rows):
    best_gain = 0
    best_question = None
    current_uncertainty = gini(rows)
    n_features = len(rows[0]) - 1

    for col in range(n_features):

        values = set([row[col] for row in rows])
        for val in values:

            question = Question(col, val)

            true_rows, false_rows = partition(rows, question)

            if len(true_rows) == 0 or len(false_rows) == 0:
                continue

            gain = info_gain(true_rows, false_rows, current_uncertainty)

            if gain >= best_gain:
                best_gain, best_question = gain, question

    return best_gain, best_question


class Leaf:

    def __init__(self, rows):
        self.predictions = class_counts(rows)


class Decision_Node:

    def __init__(self,
                 question,
                 true_branch,
                 false_branch):
        self.question = question
        self.true_branch = true_branch
        self.false_branch = false_branch


def build_tree(rows):
    gain, question = find_best_split(rows)
    if gain == 0:
        return Leaf(rows)

    true_rows, false_rows = partition(rows, question)

    true_branch = build_tree(true_rows)

    false_branch = build_tree(false_rows)

    return Decision_Node(question, true_branch, false_branch)


def print_tree(node, spacing=""):
    if isinstance(node, Leaf):
        print(spacing + "Predict", node.predictions)
        return

    print(spacing + str(node.question))

    print(spacing + '--> True:')
    print_tree(node.true_branch, spacing + "  ")

    print(spacing + '--> False:')
    print_tree(node.false_branch, spacing + "  ")


def classify(row, node):
    if isinstance(node, Leaf):
        return node.predictions

    if node.question.match(row):
        return classify(row, node.true_branch)
    else:
        return classify(row, node.false_branch)


def print_leaf(counts):
    total = sum(counts.values()) * 1.0
    probs = {}
    for lbl in counts.keys():
        probs[lbl] = str(int(counts[lbl] / total * 100)) + "%"
    return probs

def dbconnection():
    cred = credentials.Certificate(
        'C:\\Users\\acer\\PycharmProjects\\test\\mumasterapp-firebase-adminsdk-4031d-e847c3d2a0.json')
    default_app = firebase_admin.initialize_app(cred)
    db = firestore.client()

    doc_ref = db.collection(u'shade').where(u'status', u'==', True).stream()
    for doc in doc_ref:
        a = u'{} => {}'.format(doc.id, doc.to_dict())
    print(a)
    b = a.split(":")
    # print(b)
    values = []
    for c in b:
        d = b.index(c)
        e = c.split(",")
        f = e[0].lstrip()
        h = f.strip("'")
        if d == 2:
            i = int(h)
            values.append(i)
        if d == 5:
            i = int(h)
            values.append(i)
        if d == 6:
            i = int(h)
            values.append(i)
        if d == 3:
            i = float(h)
            values.append(i)
        if d == 4:
            i = float(h)
            values.append(i)
        if d == 7:
            i = h.split("'")
            j = i[0]
            values.append(j)
    p = values[0]
    q = values[-2]
    values[0] = q
    values[-2] = p
    values[0] = b
    return values,doc_ref, db

def saveToDb(preditction,doc_ref,db):
    doc_ref = db.collection(u'shade').document(u'results')
    doc_ref.set(
      {
        u'product':preditction
      }
    )

def main():
    my_tree = build_tree(assignTraningSet())
    row,doc_ref,db=dbconnection()
    prediction= print_leaf(classify(row,my_tree))
    print(type(prediction))
    for key in prediction:
        x=key
    print(x)
    saveToDb(x,doc_ref,db)
    # testing_data = [
    #     [500, 12222, 54444, 84444, 6444, 'Revlon'],
    #     [55333, 3, 5, 7, 8, 'Dior'],
    #     [100, 122222, 5, 3434444, 5, 'Fenty'],
    #     [32, 12323, 5, 8, 6, 'Revlon'],
    #     [163333, 153334444, 733333, 43333, 3333, 'MakeUp'],
    # ]
    #
    # for row in testing_data:
    #     print("Actual: %s. Predicted: %s" %
    #           (row[-1], print_leaf(classify(row, my_tree))))

if __name__ == '__main__':
    main()


