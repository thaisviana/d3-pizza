import nltk

# nltk.download('punkt')
# nltk.download('words')
# nltk.download('maxent_ne_chunker')
# nltk.download('averaged_perceptron_tagger')

paragraph = 'Oh, you can’t help that," said the Cat: "we’re all mad here. I’m mad. You’re mad.'

words = nltk.word_tokenize(paragraph)

tagged_words = nltk.pos_tag(words)

named_entity = nltk.ne_chunk(tagged_words)
named_entity.draw()
