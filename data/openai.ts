export type OpenAICandidateEvaluation = {
    candidate_id: number
    candidate_name: string
    evaluation: {
      success: boolean
      data: {
        name: string
    overall_score: number
    pronunciation_score: number
    grammar_score: number
    vocabulary_score: number
    filler_words_score: number
    mother_tongue_influence_score: number
    fluency_score: number
    detailed_comments: string
      }
      model: "openai" | string
      timestamp: string // ISO date string
    }
  }
  
  export const OPEN_AI_DATA: OpenAICandidateEvaluation[] = 
  
  [
    {
      "candidate_id": 14693,
      "candidate_name": "Ajay Kumar Sharma ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 72,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 75,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 80,
          "detailed_comments": "The candidate demonstrates good fluency and confidence in communication, with a natural flow of speech. Pronunciation is generally clear, though there are occasional hesitations and filler words that slightly disrupt the flow. Vocabulary is varied and appropriate for the context, showing a good range of expression. While there are some grammatical inaccuracies, they do not significantly impede understanding. The influence of the mother tongue is present but does not majorly affect comprehension. Overall, the candidate is effective in conveying ideas and is ready for professional communication with minor improvements needed in reducing fillers and enhancing grammatical accuracy."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:50:50.145Z"
      }
    },
    {
      "candidate_id": 14559,
      "candidate_name": "AVANTIKA",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 64,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "The candidate demonstrates a moderate level of fluency, with a generally smooth flow of speech, though there are frequent filler words that disrupt the continuity. Pronunciation is mostly clear, but some words may be challenging for international listeners. Vocabulary is adequate for professional settings, with some repetition. Grammar shows noticeable errors, particularly in verb tense and sentence structure, but these do not significantly hinder understanding. The candidate's native language influence is present but does not majorly impact comprehension. Overall, the candidate is functional in communication but could benefit from reducing filler words and improving grammatical accuracy."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:51:19.642Z"
      }
    },
    {
      "candidate_id": 14706,
      "candidate_name": "CHARU GOYAL",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Charu Goyal",
          "overall_score": 78,
          "pronunciation_score": 75,
          "grammar_score": 70,
          "vocabulary_score": 80,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 80,
          "fluency_score": 85,
          "detailed_comments": "Charu demonstrates a strong ability to communicate effectively in a professional setting, with a clear passion for teaching and a good grasp of educational concepts. Her fluency is commendable, maintaining a smooth flow of speech despite some use of filler words. Pronunciation is generally clear, though there are occasional hesitations. Vocabulary is varied and appropriate for the context, though grammar could be improved slightly to enhance clarity. Overall, Charu is well-prepared for a teaching role, with minor areas for improvement in reducing filler words and refining grammar."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:51:30.063Z"
      }
    },
    {
      "candidate_id": 14687,
      "candidate_name": "Gayathri P",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Gayatri",
          "overall_score": 52,
          "pronunciation_score": 50,
          "grammar_score": 45,
          "vocabulary_score": 55,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 50,
          "fluency_score": 55,
          "detailed_comments": "Gayatri demonstrates a basic level of fluency and vocabulary, with some ability to express ideas in a professional context. However, her speech is frequently interrupted by filler words and pauses, which affects the overall flow and confidence. Pronunciation and mother tongue influence are noticeable but do not severely hinder comprehension. There is a need for improvement in grammar and sentence structure to enhance clarity and effectiveness in communication. With focused practice on reducing fillers and improving sentence construction, Gayatri can significantly enhance her communication skills for a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:51:40.967Z"
      }
    },
    {
      "candidate_id": 14547,
      "candidate_name": "Harish HG",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 58,
          "pronunciation_score": 60,
          "grammar_score": 50,
          "vocabulary_score": 55,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "detailed_comments": "The candidate demonstrates moderate fluency and can convey ideas, but the frequent use of filler words impacts the clarity and confidence of their communication. Pronunciation is generally clear, though some native language influence is present. Vocabulary is adequate for professional settings, but there is room for improvement in variety and precision. Grammar errors are noticeable but do not significantly hinder understanding. Reducing filler words and enhancing vocabulary range could improve overall communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:51:51.008Z"
      }
    },
    {
      "candidate_id": 14712,
      "candidate_name": "Heena Sagar Jain",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Jain",
          "overall_score": 62,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 60,
          "fluency_score": 70,
          "detailed_comments": "Jain demonstrates a moderate level of fluency, with a generally smooth flow of speech, though frequent filler words interrupt the continuity. Pronunciation is clear enough to be understood, but there is a noticeable influence from the native language. Vocabulary is varied and contextually appropriate, showing an ability to express ideas clearly. Grammar has some issues, particularly with sentence structure and verb tense, but these do not significantly hinder understanding. Overall, Jain can communicate effectively in a professional setting, though improvement in reducing filler words and refining grammar would enhance clarity and confidence."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:52:03.023Z"
      }
    },
    {
      "candidate_id": 14617,
      "candidate_name": "kajal bagdai",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Kajal Baghda",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "detailed_comments": "Kajal demonstrates a good grasp of vocabulary and is able to express her ideas clearly, though her speech is frequently interrupted by filler words which affect fluency. Her pronunciation is generally clear, but there are occasional lapses that may require listeners to pay closer attention. While her grammar is mostly correct, there are some inconsistencies that do not significantly hinder understanding. Kajal's communication is effective, but reducing filler words and improving fluency would enhance her professional readiness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:52:14.044Z"
      }
    },
    {
      "candidate_id": 14597,
      "candidate_name": "kokilapriya",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate from Tamil Nadu",
          "overall_score": 58,
          "pronunciation_score": 55,
          "grammar_score": 50,
          "vocabulary_score": 60,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "detailed_comments": "The candidate demonstrates a moderate level of fluency and vocabulary, with a clear passion for teaching and helping students understand concepts. However, the frequent use of filler words and some grammatical inaccuracies affect the overall communication effectiveness. Pronunciation is generally understandable, though there is some influence from the native language. Improvement in reducing filler words and enhancing sentence structure would benefit professional communication."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:52:26.140Z"
      }
    },
    {
      "candidate_id": 14555,
      "candidate_name": "Kritika taneja",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Kritika Taneja",
          "overall_score": 58,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 65,
          "fluency_score": 55,
          "detailed_comments": "Kritika demonstrates a basic level of fluency and vocabulary, with a noticeable use of filler words that disrupt the flow of her speech. Her pronunciation is generally clear, though there are instances where native language influence affects clarity. She uses a limited range of vocabulary and makes frequent grammatical errors, but these do not completely obstruct understanding. To improve, Kritika should focus on reducing filler words and enhancing her fluency and grammatical accuracy for more effective communication in a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:52:35.776Z"
      }
    },
    {
      "candidate_id": 14678,
      "candidate_name": "Lakshay Dev Singh",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Lakshya",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Lakshya demonstrates a good level of fluency and is able to communicate ideas effectively, though there are some pauses and filler words that slightly disrupt the flow. Pronunciation is generally clear, but there are occasional lapses that may require listeners to focus more closely. Vocabulary usage is appropriate for the context, showing a reasonable range and ability to express ideas. Grammar is functional but contains errors that, while not obstructive, are noticeable. There is some influence from the native language, but it does not significantly hinder understanding. Overall, Lakshya is capable of effective communication in a professional setting with room for improvement in reducing filler words and refining grammar."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:52:47.346Z"
      }
    },
    {
      "candidate_id": 14666,
      "candidate_name": "Mahalakshmi V",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Lakshmi",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Lakshmi demonstrates a genuine passion for teaching and a strong understanding of her subject matter, which is evident in her ability to explain complex concepts using visuals. Her fluency is moderate, with a natural flow of ideas, though frequent filler words and some hesitations impact the overall smoothness of her speech. Pronunciation is generally clear, but there are occasional lapses that may affect comprehension. Vocabulary is varied and contextually appropriate, but grammar could be improved, particularly in sentence structure and verb usage. Reducing filler words and enhancing grammatical accuracy will strengthen her communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:52:57.644Z"
      }
    },
    {
      "candidate_id": 14676,
      "candidate_name": "Mathi T",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Abhinaya",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Abhinaya demonstrates a strong passion for teaching mathematics and effectively uses real-life examples to engage students. Her fluency is moderate, with a natural flow of ideas, though frequent filler words impact the overall smoothness of her speech. Pronunciation is generally clear, but some native language influence is noticeable. Vocabulary is varied and appropriate for the context, but grammar could be improved for more precise communication. Reducing filler words and enhancing grammatical accuracy will strengthen her professional communication skills."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:53:10.952Z"
      }
    },
    {
      "candidate_id": 14832,
      "candidate_name": "MD ASHIF",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Mohammed Asif",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Mohammed Asif demonstrates a good level of fluency and is able to communicate his ideas effectively, though there are frequent pauses and filler words that slightly disrupt the flow. His pronunciation is generally clear, but there are occasional lapses that may affect comprehension for some listeners. Vocabulary usage is adequate for professional contexts, though there is room for more variety. Grammar is functional, with some errors that do not significantly hinder understanding. Reducing filler words and enhancing sentence structure will improve overall communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:53:23.803Z"
      }
    },
    {
      "candidate_id": 14659,
      "candidate_name": "name",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Lamitan",
          "overall_score": 52,
          "pronunciation_score": 60,
          "grammar_score": 45,
          "vocabulary_score": 50,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 55,
          "fluency_score": 50,
          "detailed_comments": "Lamitan demonstrates a basic level of communication skills with noticeable gaps in fluency and grammar. The frequent use of filler words and pauses affects the smoothness of speech, and there are several instances of incomplete sentences. Pronunciation is generally clear, but the influence of the mother tongue is evident, impacting the overall clarity. Improvement in structuring sentences and reducing filler words would enhance communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:53:34.276Z"
      }
    },
    {
      "candidate_id": 14557,
      "candidate_name": "Naresh Chockalingam ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Naresh",
          "overall_score": 62,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 70,
          "fluency_score": 60,
          "detailed_comments": "Naresh demonstrates a strong understanding of his subject matter and can articulate complex concepts effectively. However, his frequent use of filler words and occasional pauses impact the fluency of his communication. His pronunciation is generally clear, though some listeners may find it challenging at times. Vocabulary usage is appropriate for a professional setting, but grammar could be improved for more polished communication. Reducing filler words and enhancing fluency will significantly improve his business communication readiness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:53:44.932Z"
      }
    },
    {
      "candidate_id": 14732,
      "candidate_name": "Nikita N Kanbarkar",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 58,
          "pronunciation_score": 60,
          "grammar_score": 50,
          "vocabulary_score": 55,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "detailed_comments": "The candidate demonstrates moderate fluency, with a generally smooth flow of speech but occasional hesitations and pauses. Pronunciation is mostly clear, though some words may require careful listening. Vocabulary is adequate for professional communication, though there is room for expansion to avoid repetition. Grammar shows noticeable errors, but they do not significantly impede understanding. The use of filler words is frequent, which affects the overall confidence and fluency. There is a noticeable influence of the mother tongue, but it does not severely impact comprehension. The candidate is functional in communication but needs improvement in reducing fillers and enhancing vocabulary for better clarity and confidence."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:53:56.481Z"
      }
    },
    {
      "candidate_id": 14752,
      "candidate_name": "Pradeep",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Pradeep",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "detailed_comments": "Pradeep demonstrates a good understanding of his subject matter and has a clear passion for teaching mathematics. His vocabulary is appropriate for a professional setting, though there is room for improvement in reducing filler words and enhancing fluency. Pronunciation is generally clear, but occasional hesitations and pauses affect the overall flow of communication. Grammar is functional but could be refined for more polished delivery. With targeted practice in fluency and reducing filler words, Pradeep can enhance his effectiveness in professional communication."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:54:32.219Z"
      }
    },
    {
      "candidate_id": 14563,
      "candidate_name": "Prajwal Chikkagalagali",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 58,
          "pronunciation_score": 55,
          "grammar_score": 50,
          "vocabulary_score": 60,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 60,
          "fluency_score": 65,
          "detailed_comments": "The candidate demonstrates a moderate level of fluency, with a noticeable use of filler words that disrupt the flow of communication. Pronunciation is generally clear, but there are moments where clarity is compromised due to the influence of the native language. Vocabulary is adequate for professional contexts, though there is room for expansion to avoid repetition. Grammar errors are present but do not significantly hinder understanding. Overall, the candidate can communicate effectively but would benefit from reducing filler words and enhancing vocabulary to improve clarity and engagement."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:54:43.039Z"
      }
    },
    {
      "candidate_id": 14572,
      "candidate_name": "Pravalika Mashabattu",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Prawika",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 55,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 65,
          "fluency_score": 75,
          "detailed_comments": "Prawika demonstrates a good level of fluency and is able to communicate her ideas effectively, despite some grammatical inaccuracies. Her pronunciation is generally clear, although there are occasional lapses that may require clarification. She uses a varied vocabulary, particularly when discussing her passion for mathematics and teaching. There is a noticeable influence of her native language in sentence structure, but it does not significantly hinder comprehension. Reducing filler words and refining grammar could enhance her communication further."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:54:55.078Z"
      }
    },
    {
      "candidate_id": 14718,
      "candidate_name": "preeti Palni",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Preeti Palni",
          "overall_score": 72,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 75,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 80,
          "detailed_comments": "Preeti demonstrates a good level of fluency and confidence in her responses, which is crucial for effective communication in a professional setting. Her vocabulary is varied and appropriate for the context, although there are some grammatical inconsistencies and frequent use of filler words that slightly hinder clarity. Pronunciation is generally clear, but there is a noticeable influence from her native language that occasionally affects comprehension. Overall, Preeti is capable of conveying her ideas effectively, with room for improvement in reducing filler words and refining grammar for enhanced clarity."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:55:05.314Z"
      }
    },
    {
      "candidate_id": 14568,
      "candidate_name": "priya Bajaj",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Priya Bajaj",
          "overall_score": 63,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "detailed_comments": "Priya demonstrates a moderate level of fluency and is able to convey her ideas, though there are frequent repetitions and hesitations that affect the flow of her speech. Her pronunciation is generally clear, but occasional mispronunciations may cause minor comprehension issues. Vocabulary usage is adequate for professional settings, though there is room for expansion to avoid repetition. Grammar errors are present but do not significantly hinder understanding. Reducing filler words and improving sentence structure will enhance her communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:55:18.056Z"
      }
    },
    {
      "candidate_id": 14598,
      "candidate_name": "priyanka Agrawal",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Priyanka Agrawal",
          "overall_score": 72,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 75,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 80,
          "detailed_comments": "Priyanka demonstrates a strong passion for teaching and effectively communicates her enthusiasm for making math engaging for students. Her fluency is commendable, maintaining a good flow of ideas despite occasional filler words. Vocabulary use is varied and appropriate for a professional setting, though grammar could be improved for more precise communication. Pronunciation is generally clear, with some influence from her native language, but it does not significantly hinder understanding. Overall, Priyanka is well-prepared for professional communication, with minor areas for improvement in grammar and filler word usage."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:55:39.265Z"
      }
    },
    {
      "candidate_id": 14662,
      "candidate_name": "rajeev ranjan",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 63,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "detailed_comments": "The candidate demonstrates a moderate level of fluency, with a generally smooth flow of speech but frequent use of filler words which affects the overall confidence. Pronunciation is clear enough to be understood, though there are occasional hesitations. Vocabulary is adequate for professional communication, with some repetition. Grammar shows noticeable gaps, particularly in sentence structure and verb usage, but these do not significantly hinder comprehension. The influence of the mother tongue is present but does not majorly impact clarity. Improvement in reducing filler words and enhancing grammatical accuracy would strengthen communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:55:50.662Z"
      }
    },
    {
      "candidate_id": 14768,
      "candidate_name": "Ramanpreet Kaur",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 62,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "The candidate demonstrates a moderate level of fluency, with a generally smooth flow of speech, though frequent filler words disrupt continuity. Pronunciation is mostly clear, but some words may require careful listening. Vocabulary is adequate for professional settings, with a good range of expressions. Grammar shows noticeable errors, particularly in verb tenses and sentence structure, but these do not significantly hinder understanding. The influence of the mother tongue is present but does not severely impact comprehension. Overall, the candidate can communicate effectively but would benefit from reducing filler words and improving grammatical accuracy."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:56:03.527Z"
      }
    },
    {
      "candidate_id": 14677,
      "candidate_name": "Reshu Jain",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 45,
          "pronunciation_score": 50,
          "grammar_score": 40,
          "vocabulary_score": 45,
          "filler_words_score": 30,
          "mother_tongue_influence_score": 50,
          "fluency_score": 40,
          "detailed_comments": "The candidate struggles with fluency, often pausing and using filler words excessively, which disrupts the flow of communication. Pronunciation is generally understandable, but frequent hesitations affect clarity. Vocabulary is basic and repetitive, lacking variety and precision. Grammar errors are frequent and sometimes impede understanding. The influence of the mother tongue is noticeable, particularly in sentence structure. Improvement is needed in reducing filler words and enhancing fluency for more effective communication in a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:56:14.335Z"
      }
    },
    {
      "candidate_id": 14705,
      "candidate_name": "sakshi bhardwaj",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Sakshi Bhartwaj",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Sakshi demonstrates a good level of fluency and is able to communicate her ideas effectively, though there are frequent pauses and filler words that disrupt the flow. Her pronunciation is generally clear, but some sentences are difficult to follow due to hesitations. Vocabulary usage is appropriate for the context, showing a good range of professional terms. Grammar errors are present but do not significantly hinder understanding. There is some influence from her native language, but it does not majorly impact comprehension. Overall, Sakshi is capable of effective communication in a professional setting with room for improvement in reducing filler words and enhancing sentence fluidity."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:56:26.240Z"
      }
    },
    {
      "candidate_id": 14587,
      "candidate_name": "seema",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "detailed_comments": "The candidate demonstrates a good level of fluency and is able to communicate ideas effectively, though there are noticeable pauses and filler words that slightly disrupt the flow. Pronunciation is generally clear, but there are moments where clarity could be improved for international listeners. Vocabulary is varied and appropriate for the context, showing an ability to express ideas without excessive repetition. Grammar is functional, with some errors that do not significantly hinder understanding. The influence of the mother tongue is present but does not majorly impact comprehension."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:56:36.844Z"
      }
    },
    {
      "candidate_id": 14748,
      "candidate_name": "Seema Kothari",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Seema Kothari",
          "overall_score": 67,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "detailed_comments": "Seema demonstrates a moderate level of fluency with a generally smooth flow of speech, though there are frequent filler words that disrupt the continuity. Her pronunciation is mostly clear, but some words may require repetition for clarity. She uses a good range of vocabulary appropriate for a professional setting, though her grammar shows some inconsistencies, particularly with verb tenses and sentence structure. There is a noticeable influence of her native language, but it does not significantly hinder comprehension. Overall, Seema communicates effectively but could benefit from reducing filler words and refining her grammar for improved clarity and confidence."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:56:50.363Z"
      }
    },
    {
      "candidate_id": 14542,
      "candidate_name": "shaik Chameli",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Sheikh Chamedi",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Sheikh Chamedi demonstrates a moderate level of fluency and vocabulary, effectively communicating his ideas despite some grammatical inaccuracies. His pronunciation is generally clear, though there are occasional instances where native language influence affects clarity. The use of filler words is noticeable, which slightly impacts the overall fluency. Improvement in reducing fillers and refining grammar could enhance his communication effectiveness in a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:56:59.837Z"
      }
    },
    {
      "candidate_id": 14630,
      "candidate_name": "Shalu Rajdev Popat",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "The candidate demonstrates a moderate level of fluency, with a generally smooth flow of speech but noticeable pauses and hesitations. Pronunciation is mostly clear, though some words may require careful listening. Vocabulary usage is varied and contextually appropriate, showing a good range of expression. Grammar is functional, with some errors that do not significantly hinder understanding. The use of filler words is frequent, which affects the overall confidence and fluency. There is a noticeable influence of the mother tongue, but it does not severely impact comprehension. Overall, the candidate is capable of effective communication but could benefit from reducing filler words and improving grammatical accuracy."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:57:09.709Z"
      }
    },
    {
      "candidate_id": 14593,
      "candidate_name": "Sheyama",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Subramanian",
          "overall_score": 58,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 65,
          "fluency_score": 55,
          "detailed_comments": "Subramanian demonstrates a basic level of fluency and vocabulary suitable for a teaching role, with a clear understanding of educational concepts. However, frequent use of filler words and pauses disrupts the flow of communication, indicating a need for improved confidence and fluency. Pronunciation is generally clear, though there is some influence from the mother tongue. Focusing on reducing filler words and enhancing sentence structure will improve overall communication effectiveness in a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:57:41.428Z"
      }
    },
    {
      "candidate_id": 14545,
      "candidate_name": "Suja Ayers",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 70,
          "fluency_score": 75,
          "detailed_comments": "The candidate demonstrates a good level of fluency and is able to communicate ideas effectively, though there are frequent filler words that slightly disrupt the flow. Pronunciation is generally clear, but occasional hesitations affect clarity. Vocabulary is varied and appropriate for the context, showing an ability to express ideas without excessive repetition. Grammar is functional, with minor errors that do not significantly hinder understanding. Overall, the candidate is capable of effective communication in a professional setting, but could benefit from reducing filler words and improving sentence structure for greater clarity."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:57:52.461Z"
      }
    },
    {
      "candidate_id": 14680,
      "candidate_name": "sumit dwivedi ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Sumit Dvidi",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Sumit demonstrates a good ability to communicate his ideas and teaching philosophy, showing a clear understanding of his subject matter. His fluency is moderate, with some hesitations and filler words that slightly disrupt the flow of speech. Pronunciation and vocabulary are generally clear, though there are occasional lapses in grammar and sentence structure. Reducing filler words and improving sentence fluidity would enhance his communication effectiveness in a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:58:02.612Z"
      }
    },
    {
      "candidate_id": 14604,
      "candidate_name": "sunanda Vudata",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Sunanda",
          "overall_score": 52,
          "pronunciation_score": 55,
          "grammar_score": 45,
          "vocabulary_score": 50,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 50,
          "fluency_score": 60,
          "detailed_comments": "Sunanda demonstrates a basic level of fluency, with some ability to express her ideas, though her speech is often interrupted by filler words and pauses. Her pronunciation is generally understandable, but there are moments where clarity could be improved. Vocabulary usage is simple and sometimes repetitive, which limits the depth of her responses. Grammar errors are present but do not significantly hinder comprehension. Reducing filler words and enhancing vocabulary range would improve her communication effectiveness in a professional setting."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:58:13.206Z"
      }
    },
    {
      "candidate_id": 14574,
      "candidate_name": "swetha chittoor",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Shweta",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 70,
          "detailed_comments": "Shweta demonstrates a good level of fluency and is able to communicate her ideas effectively, though her speech includes frequent filler words which slightly disrupt the flow. Her pronunciation is generally clear, but there are occasional lapses that may require listeners to pay closer attention. She uses a varied vocabulary appropriate for her teaching context, though her grammar shows some inconsistencies. There is a noticeable influence from her mother tongue, but it does not significantly hinder comprehension. Overall, she is capable of effective communication in a professional setting, with room for improvement in reducing filler words and enhancing grammatical accuracy."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:58:24.627Z"
      }
    },
    {
      "candidate_id": 14592,
      "candidate_name": "venkata padmavathi g",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Candidate",
          "overall_score": 58,
          "pronunciation_score": 60,
          "grammar_score": 50,
          "vocabulary_score": 55,
          "filler_words_score": 40,
          "mother_tongue_influence_score": 60,
          "fluency_score": 65,
          "detailed_comments": "The candidate demonstrates moderate fluency, managing to convey ideas despite frequent use of filler words that disrupt the flow. Pronunciation is generally clear, though some native language influence is noticeable. Vocabulary is adequate for basic professional communication, but lacks variety and precision. Grammar errors are present but do not significantly impede understanding. Improvement in reducing filler words and enhancing vocabulary range would strengthen overall communication effectiveness."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:58:34.825Z"
      }
    },
    {
      "candidate_id": 14584,
      "candidate_name": "Vignesh Narayanan",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vignesh Narayan",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "detailed_comments": "Vignesh demonstrates a moderate level of fluency with a natural flow of speech, though frequent filler words slightly disrupt the communication. His pronunciation is generally clear, but some words may require careful listening. Vocabulary usage is varied and contextually appropriate, showing a good range of expression. While there are noticeable grammar errors, they do not significantly hinder understanding. The influence of his mother tongue is present but does not majorly affect comprehension. Overall, Vignesh is functional in business communication but could benefit from reducing filler words and refining grammar for improved clarity."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:58:44.716Z"
      }
    },
    {
      "candidate_id": 14694,
      "candidate_name": "VIGNESHWARAN R",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vigneshwaran",
          "overall_score": 68,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 75,
          "detailed_comments": "Vigneshwaran demonstrates a good level of fluency and confidence in his speech, which is crucial for effective communication in a professional setting. His vocabulary is varied and appropriate for the context, showing his ability to express ideas clearly. However, his pronunciation and grammar could benefit from improvement, as there are noticeable influences from his native language and some grammatical inaccuracies. The frequent use of filler words slightly detracts from the overall fluency. With some refinement in these areas, Vigneshwaran could enhance his communication effectiveness further."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:58:55.310Z"
      }
    },
    {
      "candidate_id": 14679,
      "candidate_name": "Vishakha Gehlot",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vishakha Dhalod",
          "overall_score": 65,
          "pronunciation_score": 60,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "detailed_comments": "Vishakha demonstrates a good level of fluency and is able to communicate her ideas effectively, though there are frequent pauses and filler words that slightly disrupt the flow. Her pronunciation is generally clear, but some words may be challenging for international listeners. The vocabulary used is appropriate for a professional setting, though there is room for expansion to avoid repetition. Grammar errors are present but do not significantly hinder understanding. Overall, Vishakha is capable of effective communication in a business environment with some areas for improvement in reducing filler words and enhancing vocabulary."
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:59:32.571Z"
      }
    }
  ]