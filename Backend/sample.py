import sys
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

# Step 1: Load and preprocess the data
def load_and_preprocess_data(file_path):
    # Load the CSV file
    df = pd.read_csv(file_path)
    
    # Convert ingredients from string to list
    df['ingredients'] = df['ingredients'].apply(lambda x: eval(x))
    
    # Join ingredients list into a single string for each record
    df['ingredients'] = df['ingredients'].apply(lambda x: ' '.join(x))
    
    return df

# Step 2: Text Vectorization
def vectorize_text(df):
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(df['ingredients'])
    return vectorizer, tfidf_matrix

# Step 3: Similarity Calculation
def calculate_similarity(vectorizer, tfidf_matrix, input_ingredients):
    input_vector = vectorizer.transform([input_ingredients])
    similarity_scores = cosine_similarity(input_vector, tfidf_matrix)
    return similarity_scores

# Step 4: Retrieve Top Matches
def get_top_matches(df, similarity_scores, top_n=5):
    similarity_scores = similarity_scores.flatten()
    top_indices = similarity_scores.argsort()[-top_n:][::-1]
    return df.iloc[top_indices]

# Main function to get top matching unique IDs
def get_top_matching_ids(file_path, input_ingredients, top_n=5):
    # Load and preprocess data
    df = load_and_preprocess_data(file_path)
    
    # Vectorize text
    vectorizer, tfidf_matrix = vectorize_text(df)
    
    # Calculate similarity
    similarity_scores = calculate_similarity(vectorizer, tfidf_matrix, input_ingredients)
    
    # Get top matches
    top_matches = get_top_matches(df, similarity_scores, top_n)
    
    # Convert top matches to dictionary format
    top_matches_list = top_matches.to_dict(orient='records')
    
    return top_matches_list

if __name__ == "__main__":
    # Get the input ingredients as a string
    input_ingredients = ' '.join(sys.argv[1:])
    file_path = "data.csv"
    top_matching_ids = get_top_matching_ids(file_path, input_ingredients)
    print(json.dumps(top_matching_ids, indent=2))
