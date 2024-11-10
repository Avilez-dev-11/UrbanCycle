# user_behavior_model.py
from sklearn.decomposition import NMF
import numpy as np

# Example data: user-route matrix
user_route_matrix = np.array([
    [5, 3, 0, 1],
    [4, 0, 0, 1],
    [1, 1, 0, 5],
    [1, 0, 4, 4],
    [0, 1, 5, 4],
])

model = NMF(n_components=2)
user_features = model.fit_transform(user_route_matrix)
route_features = model.components_

# Function to recommend a route for a given user
def recommend_route(user_id):
    user_pref = user_features[user_id]
    scores = np.dot(user_pref, route_features)
    return np.argmax(scores)

print("Recommended Route:", recommend_route(0))