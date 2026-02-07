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
        summary_points: string[]
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
          "name": "Ajay Kumar Sharma ",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 65,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "summary_points": [
            "The candidate demonstrates a good level of fluency with the ability to sustain answers and provide detailed responses.",
            "Vocabulary usage is adequate, allowing for clear expression of ideas and teaching methods.",
            "Pronunciation is generally understandable, making it easy for an international audience to follow.",
            "There are noticeable filler words and some grammatical errors, but they do not significantly hinder understanding.",
            "The candidate could improve by reducing filler words and refining grammatical accuracy for more polished communication."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:55:20.786Z"
      }
    },
    {
      "candidate_id": 14559,
      "candidate_name": "AVANTIKA",
      "evaluation": {
        "success": true,
        "data": {
          "name": "AVANTIKA",
          "overall_score": 55,
          "pronunciation_score": 65,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a genuine enthusiasm for teaching and a commitment to making learning engaging and fun for students.",
            "There is a clear effort to connect with students globally and adapt teaching methods to suit different learning speeds.",
            "Frequent use of filler words and some grammatical errors occasionally disrupt the flow of communication.",
            "Vocabulary is basic but sufficient for conveying teaching concepts, though there is room for expanding expressive range.",
            "Pronunciation is generally understandable, but some effort is required to follow the speech due to pacing and filler usage."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:55:30.984Z"
      }
    },
    {
      "candidate_id": 14706,
      "candidate_name": "CHARU GOYAL",
      "evaluation": {
        "success": true,
        "data": {
          "name": "CHARU GOYAL",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 72,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "summary_points": [
            "Charu demonstrates a strong ability to explain mathematical concepts clearly and patiently, which is a key strength for teaching.",
            "Her vocabulary is adequate for professional communication, effectively conveying her teaching philosophy and methods.",
            "Pronunciation is generally clear, making her speech understandable to an international audience.",
            "There are noticeable pauses and filler words, which slightly affect the flow of her speech, but overall communication remains effective.",
            "Some grammatical errors are present, but they do not significantly hinder understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:56:00.192Z"
      }
    },
    {
      "candidate_id": 14687,
      "candidate_name": "Gayathri P",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Gayathri P",
          "overall_score": 53,
          "pronunciation_score": 65,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "The candidate demonstrates a willingness to engage with students and adapt teaching methods to suit different learning speeds.",
            "There is a clear enthusiasm for online teaching and a desire to make math engaging and accessible for students.",
            "Frequent pauses and filler words affect the flow of speech, making communication somewhat uneven.",
            "Grammar and vocabulary usage are basic, with some errors that occasionally affect clarity.",
            "Pronunciation is generally understandable, though there are moments that require listener effort."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:56:11.847Z"
      }
    },
    {
      "candidate_id": 14547,
      "candidate_name": "Harish HG",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Harish HG",
          "overall_score": 55,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 60,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a clear passion for teaching and a strong background in software consulting, which is a valuable asset.",
            "Pronunciation is generally understandable, making communication accessible to an international audience.",
            "There is a noticeable use of filler words and hesitations, which slightly disrupts the flow of speech.",
            "Grammar is mostly correct, but there are some errors that do not significantly impact understanding.",
            "Vocabulary is basic but sufficient for professional communication, though there is room for more expressive language."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:56:21.915Z"
      }
    },
    {
      "candidate_id": 14712,
      "candidate_name": "Heena Sagar Jain",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Heena Sagar Jain",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 65,
          "summary_points": [
            "The candidate demonstrates a clear passion for teaching and uses creative methods to engage students, such as using daily examples and models.",
            "Pronunciation is generally understandable, making it easy for international listeners to follow the conversation.",
            "The candidate shows a good understanding of adapting teaching methods to suit different learning speeds and needs.",
            "Frequent use of filler words and some grammatical errors affect the overall flow and clarity of communication.",
            "There is room for improvement in reducing filler words and enhancing grammatical accuracy to improve communication effectiveness."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:56:32.234Z"
      }
    },
    {
      "candidate_id": 14617,
      "candidate_name": "kajal bagdai",
      "evaluation": {
        "success": true,
        "data": {
          "name": "kajal bagdai",
          "overall_score": 59,
          "pronunciation_score": 75,
          "grammar_score": 72,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 68,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching and effectively communicates her experience and skills.",
            "Pronunciation is generally clear, making her speech understandable to an international audience.",
            "Vocabulary is adequate, allowing her to express ideas clearly and relate them to real-life examples.",
            "Frequent use of filler words occasionally disrupts the flow of speech, which could be improved for smoother communication.",
            "There are some grammatical errors, but they do not significantly hinder understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:56:42.743Z"
      }
    },
    {
      "candidate_id": 14597,
      "candidate_name": "kokilapriya",
      "evaluation": {
        "success": true,
        "data": {
          "name": "kokilapriya",
          "overall_score": 55,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 60,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a clear passion for teaching and a strong commitment to helping students understand math concepts.",
            "Pronunciation is generally understandable, which aids in conveying ideas effectively to an international audience.",
            "There is a noticeable use of filler words, which occasionally disrupts the flow of communication.",
            "Grammar and vocabulary are functional but could be improved for more precise and expressive communication."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:56:52.148Z"
      }
    },
    {
      "candidate_id": 14555,
      "candidate_name": "Kritika taneja",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Kritika taneja",
          "overall_score": 56,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 60,
          "summary_points": [
            "Kritika demonstrates a genuine passion for teaching and a strong commitment to helping students develop their mathematical skills.",
            "She effectively uses real-life examples and short tricks to make complex concepts more accessible to students.",
            "Her pronunciation is generally clear, making her understandable to an international audience.",
            "Frequent use of filler words and some grammatical errors occasionally disrupt the flow of her speech.",
            "Improving fluency and reducing filler words would enhance her overall communication effectiveness."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:57:02.061Z"
      }
    },
    {
      "candidate_id": 14678,
      "candidate_name": "Lakshay Dev Singh",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Lakshay Dev Singh",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 65,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "summary_points": [
            "The candidate demonstrates a good level of fluency, maintaining a steady flow of speech with only minor hesitations.",
            "Vocabulary usage is adequate, effectively conveying ideas with a professional range of expressions.",
            "Pronunciation is generally clear, making the speech understandable to an international audience.",
            "There are some noticeable filler words, which occasionally disrupt the flow of communication.",
            "Grammar is mostly correct, though there are some errors that do not significantly impede understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:57:12.250Z"
      }
    },
    {
      "candidate_id": 14666,
      "candidate_name": "Mahalakshmi V",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Mahalakshmi V",
          "overall_score": 56,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "summary_points": [
            "The candidate demonstrates a genuine passion for teaching and a strong commitment to helping students understand concepts deeply.",
            "Pronunciation is generally clear, making the speech understandable to an international audience.",
            "There is a noticeable use of filler words, which sometimes disrupts the flow of communication.",
            "Grammar errors are present but do not significantly hinder understanding.",
            "The candidate uses a basic vocabulary range, which is generally effective for conveying ideas."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:57:21.710Z"
      }
    },
    {
      "candidate_id": 14676,
      "candidate_name": "Mathi T",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Mathi T",
          "overall_score": 59,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 72,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching mathematics, particularly to children, and effectively uses real-life examples to explain complex concepts.",
            "Pronunciation is generally clear, making the speech understandable to an international audience.",
            "The candidate uses a variety of teaching strategies to engage students and adapt to different learning speeds.",
            "There is noticeable use of filler words, which occasionally disrupts the flow of communication.",
            "Some grammatical errors are present, but they do not significantly hinder understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:57:31.571Z"
      }
    },
    {
      "candidate_id": 14832,
      "candidate_name": "MD ASHIF",
      "evaluation": {
        "success": true,
        "data": {
          "name": "MD ASHIF",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 65,
          "fluency_score": 68,
          "summary_points": [
            "Mohammed demonstrates a strong passion for teaching, particularly in mathematics, and has experience in both offline and online teaching environments.",
            "He effectively communicates his teaching philosophy and methods, showing an understanding of how to engage students actively.",
            "His pronunciation is generally clear, making him understandable to an international audience, though there are some areas where clarity could be improved.",
            "Frequent use of filler words and some grammatical errors occasionally disrupt the flow of his speech, which could be refined for smoother communication.",
            "There is a noticeable influence of his native language in sentence structure, but it does not significantly hinder comprehension."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:57:41.781Z"
      }
    },
    {
      "candidate_id": 14659,
      "candidate_name": "name",
      "evaluation": {
        "success": true,
        "data": {
          "name": "name",
          "overall_score": 54,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 60,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 65,
          "fluency_score": 55,
          "summary_points": [
            "The candidate demonstrates a basic ability to communicate ideas, with some understanding of professional teaching concepts.",
            "Pronunciation is generally understandable, though some effort is required due to frequent pauses and filler words.",
            "There is a noticeable influence from the candidate's native language, but it does not significantly hinder comprehension.",
            "Frequent use of filler words and pauses disrupts the flow of communication, affecting overall fluency.",
            "Improvement in structuring responses and reducing filler words would enhance clarity and engagement."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:57:52.622Z"
      }
    },
    {
      "candidate_id": 14557,
      "candidate_name": "Naresh Chockalingam ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Naresh Chockalingam ",
          "overall_score": 56,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 75,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a solid understanding of complex mathematical concepts and effectively communicates their teaching strategies.",
            "Vocabulary is adequate for professional settings, with clear explanations of technical topics.",
            "Pronunciation is generally clear, making the speech understandable to an international audience.",
            "Frequent use of filler words and hesitations slightly disrupts the flow of communication.",
            "Improving fluency and reducing filler words could enhance overall communication effectiveness."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:58:04.541Z"
      }
    },
    {
      "candidate_id": 14732,
      "candidate_name": "Nikita N Kanbarkar",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Nikita N Kanbarkar",
          "overall_score": 51,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 60,
          "filler_words_score": 70,
          "mother_tongue_influence_score": 65,
          "fluency_score": 55,
          "summary_points": [
            "The candidate shows enthusiasm for teaching and a genuine interest in engaging students with real-life examples.",
            "Pronunciation is generally understandable, though there are moments that require careful listening.",
            "There is a noticeable use of filler words, but they do not heavily disrupt the overall communication.",
            "Grammar and sentence structure occasionally affect clarity, with some awkward phrasing and incomplete thoughts.",
            "Improving fluency and vocabulary range could enhance the candidate's ability to express ideas more clearly and confidently."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:58:14.524Z"
      }
    },
    {
      "candidate_id": 14752,
      "candidate_name": "Pradeep",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Pradeep",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 65,
          "fluency_score": 68,
          "summary_points": [
            "Pradeep demonstrates a good understanding of teaching strategies and adapts his methods to suit different learning speeds, which is a valuable skill in education.",
            "He effectively uses real-world examples to explain complex math concepts, making them more relatable and easier to understand for students.",
            "While his speech is generally understandable, there are frequent pauses and filler words that slightly disrupt the flow of communication.",
            "There are some grammatical errors and sentence structures influenced by his native language, but they do not significantly hinder comprehension."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:58:24.223Z"
      }
    },
    {
      "candidate_id": 14563,
      "candidate_name": "Prajwal Chikkagalagali",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Prajwal Chikkagalagali",
          "overall_score": 55,
          "pronunciation_score": 65,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a clear passion for mathematics and teaching, which is a strong asset for the role.",
            "Pronunciation is generally understandable, allowing for effective communication with international students.",
            "There is a basic but usable range of vocabulary, sufficient for explaining mathematical concepts.",
            "Frequent use of filler words and pauses affects the flow of communication, leading to some unevenness in fluency.",
            "Grammar errors are present and occasionally affect clarity, particularly in more complex explanations."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:58:36.254Z"
      }
    },
    {
      "candidate_id": 14572,
      "candidate_name": "Pravalika Mashabattu",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Pravalika Mashabattu",
          "overall_score": 53,
          "pronunciation_score": 65,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a strong passion for mathematics and a desire to teach, which is clearly communicated.",
            "Pronunciation is generally understandable, though there are moments where clarity could be improved.",
            "There is a noticeable use of filler words and pauses, which slightly disrupts the flow of speech.",
            "Grammar errors are present but do not significantly hinder understanding; however, more attention to sentence structure could enhance clarity.",
            "Vocabulary is basic but sufficient for conveying ideas, though expanding the range could improve expression."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:58:57.021Z"
      }
    },
    {
      "candidate_id": 14718,
      "candidate_name": "preeti Palni",
      "evaluation": {
        "success": true,
        "data": {
          "name": "preeti Palni",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 70,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 68,
          "fluency_score": 68,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching and effectively uses creative methods to engage students.",
            "Vocabulary is adequate for professional communication, with clear explanations of teaching strategies and concepts.",
            "Pronunciation is generally understandable, though there are moments where clarity could be improved.",
            "Frequent pauses and filler words slightly disrupt the flow of speech, but overall communication remains functional.",
            "Grammar errors are present but do not significantly hinder understanding; refining sentence structure could enhance clarity."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:59:12.543Z"
      }
    },
    {
      "candidate_id": 14568,
      "candidate_name": "priya Bajaj",
      "evaluation": {
        "success": true,
        "data": {
          "name": "priya Bajaj",
          "overall_score": 55,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 60,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 60,
          "summary_points": [
            "Priya demonstrates a strong passion for teaching and a solid background in education, with over 10 years of experience.",
            "Her pronunciation is generally clear, making her speech understandable to an international audience.",
            "She uses a range of vocabulary that is adequate for professional communication, though there is room for more precision.",
            "There are frequent pauses and filler words that disrupt the flow of her speech, which could be improved for smoother delivery.",
            "Grammar is mostly correct, but there are some errors that could be refined for clearer expression."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:59:23.285Z"
      }
    },
    {
      "candidate_id": 14598,
      "candidate_name": "priyanka Agrawal",
      "evaluation": {
        "success": true,
        "data": {
          "name": "priyanka Agrawal",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 72,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching and effectively uses real-world examples to make math relatable and engaging for students.",
            "Vocabulary is adequate, with the ability to express ideas clearly and provide detailed examples of teaching methods and experiences.",
            "Pronunciation is generally clear, making the speech understandable to an international audience.",
            "Frequent use of filler words and some grammatical errors slightly disrupt the flow of communication.",
            "There is a noticeable influence of mother tongue in sentence structure, but it does not significantly impact comprehension."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:59:34.581Z"
      }
    },
    {
      "candidate_id": 14662,
      "candidate_name": "rajeev ranjan",
      "evaluation": {
        "success": true,
        "data": {
          "name": "rajeev ranjan",
          "overall_score": 56,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "summary_points": [
            "The candidate demonstrates a good understanding of teaching concepts and uses practical examples to engage students.",
            "Pronunciation is generally clear, making it easy for international listeners to understand the candidate's responses.",
            "There is a noticeable use of filler words, which occasionally disrupts the flow of communication.",
            "Grammar errors are present but do not significantly hinder understanding.",
            "The candidate's vocabulary is adequate for professional teaching contexts, though there is room for more precise expression."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:59:46.869Z"
      }
    },
    {
      "candidate_id": 14768,
      "candidate_name": "Ramanpreet Kaur",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Ramanpreet Kaur",
          "overall_score": 56,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching and has a diverse background in both technology and education.",
            "Pronunciation is generally clear, making it easy for international listeners to understand.",
            "Vocabulary is adequate for professional communication, with the ability to express ideas clearly.",
            "Frequent use of filler words and some hesitations affect the overall fluency and flow of speech.",
            "Grammar errors are present but do not significantly hinder understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T07:59:57.748Z"
      }
    },
    {
      "candidate_id": 14677,
      "candidate_name": "Reshu Jain",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Reshu Jain",
          "overall_score": 54,
          "pronunciation_score": 65,
          "grammar_score": 60,
          "vocabulary_score": 60,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 65,
          "fluency_score": 55,
          "summary_points": [
            "The candidate demonstrates a basic ability to express ideas and engage with the questions, showing a willingness to communicate.",
            "Pronunciation is generally understandable, allowing for comprehension despite some hesitations and pauses.",
            "There is a noticeable use of filler words which affects the overall fluency and clarity of the responses.",
            "Grammar and vocabulary are functional but contain frequent errors that occasionally hinder the smooth delivery of ideas.",
            "Improvement in reducing filler words and enhancing sentence structure would significantly boost communication effectiveness."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:00:09.130Z"
      }
    },
    {
      "candidate_id": 14705,
      "candidate_name": "sakshi bhardwaj",
      "evaluation": {
        "success": true,
        "data": {
          "name": "sakshi bhardwaj",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 65,
          "fluency_score": 68,
          "summary_points": [
            "Sakshi demonstrates a good understanding of teaching methodologies and is able to articulate her teaching strategies effectively.",
            "She uses real-life examples to make math relatable and engaging for students, which is a strong approach to teaching.",
            "Her pronunciation is generally clear, making her speech understandable to an international audience.",
            "There are frequent pauses and filler words that slightly disrupt the flow of her speech, which could be improved for smoother communication.",
            "Some grammatical errors and sentence structure issues are present, but they do not significantly hinder understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:01:09.528Z"
      }
    },
    {
      "candidate_id": 14587,
      "candidate_name": "seema",
      "evaluation": {
        "success": true,
        "data": {
          "name": "seema",
          "overall_score": 55,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching mathematics and uses creative methods to engage students.",
            "Pronunciation is generally clear, making it easy for listeners to understand the key points.",
            "There is a noticeable use of filler words and some grammatical errors, but these do not significantly hinder comprehension.",
            "The candidate could improve fluency by reducing pauses and filler words to enhance the flow of communication."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:01:29.503Z"
      }
    },
    {
      "candidate_id": 14748,
      "candidate_name": "Seema Kothari",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Seema Kothari",
          "overall_score": 58,
          "pronunciation_score": 72,
          "grammar_score": 65,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 68,
          "summary_points": [
            "Seema demonstrates a strong professional background and a clear passion for teaching, particularly in the field of mathematics.",
            "Her vocabulary is adequate for professional communication, allowing her to express her ideas clearly.",
            "Pronunciation is generally understandable, making her speech accessible to an international audience.",
            "There are noticeable filler words and some pauses that slightly disrupt the flow of communication.",
            "Grammar errors are present but do not significantly hinder understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:01:40.749Z"
      }
    },
    {
      "candidate_id": 14542,
      "candidate_name": "shaik Chameli",
      "evaluation": {
        "success": true,
        "data": {
          "name": "shaik Chameli",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 65,
          "fluency_score": 68,
          "summary_points": [
            "The candidate demonstrates a good understanding of teaching concepts and uses relatable examples to explain complex ideas, which is a strong asset in education.",
            "Pronunciation is generally clear, making it easy for an international audience to follow the conversation.",
            "Vocabulary is adequate for professional communication, with the ability to express ideas using relevant examples and teaching strategies.",
            "There are noticeable pauses and filler words that occasionally disrupt the flow of speech, suggesting room for improvement in fluency.",
            "Grammar errors are present but do not significantly hinder understanding, indicating an area for further development."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:01:53.447Z"
      }
    },
    {
      "candidate_id": 14630,
      "candidate_name": "Shalu Rajdev Popat",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Shalu Rajdev Popat",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 55,
          "vocabulary_score": 65,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a good understanding of teaching concepts and expresses a genuine passion for making math engaging and relatable.",
            "Pronunciation is generally clear, making it possible for an international audience to understand the candidate's points.",
            "Vocabulary is adequate, with the ability to convey ideas using relevant examples and explanations.",
            "Frequent use of filler words and pauses disrupts the flow of communication, affecting overall fluency.",
            "Grammar errors are present and occasionally impact clarity, suggesting room for improvement in sentence structure."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:02:05.304Z"
      }
    },
    {
      "candidate_id": 14593,
      "candidate_name": "Sheyama",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Sheyama",
          "overall_score": 55,
          "pronunciation_score": 70,
          "grammar_score": 65,
          "vocabulary_score": 60,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a clear understanding of teaching concepts and adapts methods for different learning speeds.",
            "Pronunciation is generally understandable, making communication effective for an international audience.",
            "There is a noticeable use of filler words, which occasionally disrupts the flow of speech.",
            "Vocabulary is basic but sufficient for conveying ideas, though there is room for more expressive language.",
            "Fluency is functional, with some hesitations and pauses affecting the smoothness of delivery."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:02:16.160Z"
      }
    },
    {
      "candidate_id": 14545,
      "candidate_name": "Suja Ayers",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Suja Ayers",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 65,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "summary_points": [
            "The candidate demonstrates a good level of fluency, maintaining a steady flow of speech with only occasional pauses.",
            "Vocabulary is adequate for professional communication, with the ability to express ideas clearly.",
            "Pronunciation is generally clear, making the speech understandable to an international audience.",
            "There are some noticeable filler words, but they do not significantly disrupt the overall communication.",
            "Minor grammatical errors are present but do not impede understanding."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:02:25.667Z"
      }
    },
    {
      "candidate_id": 14680,
      "candidate_name": "sumit dwivedi ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "sumit dwivedi ",
          "overall_score": 53,
          "pronunciation_score": 68,
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 70,
          "mother_tongue_influence_score": 65,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a clear understanding of teaching concepts and uses real-life examples effectively to explain complex ideas.",
            "Vocabulary is adequate for professional communication, with the ability to express ideas using relevant educational terms.",
            "Pronunciation is generally understandable, though there are occasional moments where clarity could be improved.",
            "Fluency is functional but somewhat uneven, with frequent pauses and filler words that slightly disrupt the flow of speech.",
            "Grammar errors are present but do not significantly block understanding, though there is room for improvement in sentence structure."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:02:37.827Z"
      }
    },
    {
      "candidate_id": 14604,
      "candidate_name": "sunanda Vudata",
      "evaluation": {
        "success": true,
        "data": {
          "name": "sunanda Vudata",
          "overall_score": 56,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 60,
          "summary_points": [
            "Sunanda demonstrates a genuine interest in teaching and has a clear passion for making learning engaging for children.",
            "Her pronunciation is generally understandable, and she uses relatable examples to explain concepts, which can be effective in teaching.",
            "There are noticeable pauses and filler words that occasionally disrupt the flow of her speech, suggesting room for improvement in fluency.",
            "Grammar errors are present but do not significantly hinder understanding, though more practice could enhance clarity.",
            "Her vocabulary is adequate for professional communication, but expanding it could help in expressing ideas more precisely."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:02:49.437Z"
      }
    },
    {
      "candidate_id": 14574,
      "candidate_name": "swetha chittoor",
      "evaluation": {
        "success": true,
        "data": {
          "name": "swetha chittoor",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 65,
          "summary_points": [
            "Shweta demonstrates a strong commitment to teaching and a clear passion for making learning engaging and interactive.",
            "Her responses show a good understanding of how to adapt teaching methods to suit different learning speeds and styles.",
            "While her speech includes some filler words and hesitations, her ideas are generally conveyed clearly.",
            "There are some grammatical errors and sentence structure influences, but they do not significantly hinder understanding.",
            "Improving fluency and reducing filler words could enhance her overall communication effectiveness."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:03:00.356Z"
      }
    },
    {
      "candidate_id": 14592,
      "candidate_name": "venkata padmavathi g",
      "evaluation": {
        "success": true,
        "data": {
          "name": "venkata padmavathi g",
          "overall_score": 55,
          "pronunciation_score": 65,
          "grammar_score": 55,
          "vocabulary_score": 60,
          "filler_words_score": 50,
          "mother_tongue_influence_score": 60,
          "fluency_score": 60,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching and has relevant experience in both software development and education.",
            "Pronunciation is generally understandable, though some effort is required due to frequent use of filler words.",
            "The candidate uses basic vocabulary effectively to convey ideas, though there is room for improvement in expressing complex concepts more clearly.",
            "Frequent grammatical errors and filler words occasionally disrupt the flow of communication, impacting overall clarity.",
            "Sentence structure is influenced by the candidate's native language, leading to some awkward phrasing, but meaning is generally clear."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:03:25.119Z"
      }
    },
    {
      "candidate_id": 14584,
      "candidate_name": "Vignesh Narayanan",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vignesh Narayanan",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 65,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 70,
          "summary_points": [
            "The candidate demonstrates a good level of fluency, maintaining a steady flow of speech with only minor hesitations.",
            "Vocabulary usage is adequate for professional settings, with clear expression of ideas.",
            "Pronunciation is generally understandable, with minimal effort required from the listener.",
            "There are some noticeable filler words, but they do not significantly disrupt communication.",
            "Grammar errors are present but do not impede understanding, indicating room for improvement in accuracy."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:03:36.000Z"
      }
    },
    {
      "candidate_id": 14694,
      "candidate_name": "VIGNESHWARAN R",
      "evaluation": {
        "success": true,
        "data": {
          "name": "VIGNESHWARAN R",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 60,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 65,
          "summary_points": [
            "The candidate demonstrates a strong passion for teaching and a clear dedication to helping students understand complex concepts.",
            "Pronunciation is generally clear, making the candidate understandable to an international audience.",
            "Vocabulary is adequate, allowing for effective communication of ideas, though there is room for more precise expression.",
            "Frequent use of filler words and some grammatical errors occasionally disrupt the flow of speech.",
            "Fluency is functional but could be improved with more practice to reduce hesitations and enhance confidence."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:03:46.851Z"
      }
    },
    {
      "candidate_id": 14679,
      "candidate_name": "Vishakha Gehlot",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vishakha Gehlot",
          "overall_score": 58,
          "pronunciation_score": 72,
          "grammar_score": 68,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 65,
          "summary_points": [
            "Vishakha demonstrates a solid professional background in mechanical engineering and teaching, which she communicates effectively.",
            "Her vocabulary is adequate for professional settings, allowing her to express ideas clearly.",
            "Pronunciation is generally understandable, with minimal effort required from the listener.",
            "There are noticeable filler words and pauses, which occasionally disrupt the flow of communication.",
            "Improving fluency and reducing filler words could enhance her overall communication effectiveness."
          ]
        },
        "model": "openai",
        "timestamp": "2026-02-07T08:03:58.269Z"
      }
    }
  ]