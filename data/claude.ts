export type OpenAICandidateEvaluation = {
  candidate_id: number;
  candidate_name: string;
  evaluation: {
    success: boolean;
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
    };
    model: "claude" | string;
    timestamp: string;
  };
};

export const CLAUDE_DATA = 

[
  {
    "candidate_id": 14693,
    "candidate_name": "Ajay Kumar Sharma ",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 60,
        "filler_words_score": 55,
        "mother_tongue_influence_score": 50,
        "fluency_score": 65,
        "detailed_comments": "The candidate demonstrates good subject matter knowledge and teaching passion, with clear pronunciation that makes them generally understandable. However, frequent grammatical errors, repetitive vocabulary, and noticeable mother tongue influence in sentence structure impact overall communication effectiveness. While they can express their ideas and maintain reasonable fluency, the language barriers may occasionally hinder clear professional communication in an international business environment."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:51:15.817Z"
    }
  },
  {
    "candidate_id": 14559,
    "candidate_name": "AVANTIKA",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 52,
        "pronunciation_score": 70,
        "grammar_score": 35,
        "vocabulary_score": 55,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 40,
        "fluency_score": 35,
        "detailed_comments": "The candidate demonstrates passion for teaching and shows good conceptual understanding of math education principles. However, communication is significantly hindered by frequent filler words, incomplete sentences, and grammatical errors that impact clarity. While pronunciation is generally clear, the heavy use of 'uh' and fragmented sentence structures would challenge professional communication effectiveness. Improvement in fluency and reducing hesitations would greatly enhance overall communication impact."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:51:25.976Z"
    }
  },
  {
    "candidate_id": 14706,
    "candidate_name": "CHARU GOYAL",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Charu Goyal",
        "overall_score": 68,
        "pronunciation_score": 75,
        "grammar_score": 60,
        "vocabulary_score": 72,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 65,
        "fluency_score": 58,
        "detailed_comments": "Charu demonstrates strong subject matter expertise and teaching concepts with good vocabulary range and clear pronunciation. However, her fluency is significantly impacted by frequent filler words (uh, like, um) and hesitations that disrupt the natural flow of speech. Grammar issues include article usage, preposition errors, and incomplete sentences, though her ideas remain comprehensible. With practice to reduce fillers and improve sentence structure, she could communicate more confidently in professional settings."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:51:36.608Z"
    }
  },
  {
    "candidate_id": 14687,
    "candidate_name": "Gayathri P",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Gayatri",
        "overall_score": 42,
        "pronunciation_score": 55,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 30,
        "fluency_score": 35,
        "detailed_comments": "Gayatri demonstrates enthusiasm for teaching and shows understanding of mathematical concepts, but faces significant communication challenges. Her speech is heavily interrupted by fillers (um, uh, actually) and frequent pauses that disrupt fluency. Grammar issues include incomplete sentences, incorrect verb forms, and word order problems that sometimes impede comprehension. Strong mother tongue influence is evident in sentence structure and word choices. While her teaching ideas show potential, the communication barriers would significantly impact effectiveness in a professional online tutoring environment."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:51:47.411Z"
    }
  },
  {
    "candidate_id": 14547,
    "candidate_name": "Harish HG",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 20,
        "mother_tongue_influence_score": 30,
        "fluency_score": 25,
        "detailed_comments": "The candidate demonstrates clear pronunciation and basic communication ability, but struggles significantly with fluency and excessive filler words (so, like, uh, um, I mean) that disrupt the flow of speech. Grammar issues include incomplete sentences, incorrect verb forms, and awkward constructions that sometimes impede understanding. While the candidate shows subject knowledge and enthusiasm for mathematics, the heavy reliance on fillers and frequent self-corrections indicate low confidence and would likely impact professional communication effectiveness. Significant improvement in fluency and reduction of filler words is needed for business readiness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:51:58.036Z"
    }
  },
  {
    "candidate_id": 14712,
    "candidate_name": "Heena Sagar Jain",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Jain",
        "overall_score": 58,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 55,
        "filler_words_score": 35,
        "mother_tongue_influence_score": 50,
        "fluency_score": 52,
        "detailed_comments": "Jain demonstrates clear pronunciation and genuine enthusiasm for teaching, making her generally understandable in professional communication. However, her fluency is significantly impacted by frequent filler words (um, uh, like), incomplete sentences, and hesitant delivery that affects confidence perception. Grammar issues include inconsistent verb tenses, article usage, and sentence structure, while vocabulary shows repetitive patterns and limited professional range. With focused practice on reducing fillers and improving sentence completion, she could enhance her communication effectiveness for business environments."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:52:10.316Z"
    }
  },
  {
    "candidate_id": 14617,
    "candidate_name": "kajal bagdai",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Kajal Baghda",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 58,
        "vocabulary_score": 68,
        "filler_words_score": 35,
        "mother_tongue_influence_score": 65,
        "fluency_score": 45,
        "detailed_comments": "Kajal demonstrates solid teaching knowledge and passion for mathematics education, with clear pronunciation that makes her easily understandable. However, her fluency is significantly impacted by excessive filler words (uh, um) and frequent hesitations that disrupt the natural flow of speech. While her vocabulary is appropriate for the teaching context and her grammar generally supports comprehension, the constant pauses and fillers would likely affect professional confidence in a business environment. With practice to reduce hesitations and improve speech flow, she could communicate much more effectively."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:52:20.643Z"
    }
  },
  {
    "candidate_id": 14597,
    "candidate_name": "kokilapriya",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 40,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 30,
        "fluency_score": 35,
        "detailed_comments": "The candidate demonstrates basic communication ability and shows genuine enthusiasm for teaching mathematics. However, frequent filler words (um, uh), incomplete sentences, and significant grammar issues impact professional communication effectiveness. Vocabulary is limited with repetitive phrases, and strong mother tongue influence affects sentence structure. While the core teaching concepts are present, improved fluency and reduced hesitation would enhance professional readiness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:52:31.937Z"
    }
  },
  {
    "candidate_id": 14555,
    "candidate_name": "Kritika taneja",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Kritika Taneja",
        "overall_score": 52,
        "pronunciation_score": 68,
        "grammar_score": 45,
        "vocabulary_score": 55,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 48,
        "fluency_score": 35,
        "detailed_comments": "Kritika demonstrates passion for teaching mathematics and her pronunciation is generally clear and understandable. However, her fluency is significantly impacted by excessive use of filler words (um, uh) and frequent pauses that disrupt the natural flow of communication. Grammar issues include incorrect verb forms, missing articles, and awkward sentence structures that sometimes affect clarity. While she shows adequate vocabulary for basic teaching concepts, her responses would benefit from more structured and confident delivery to be effective in a professional teaching environment."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:52:42.339Z"
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
        "pronunciation_score": 75,
        "grammar_score": 60,
        "vocabulary_score": 70,
        "filler_words_score": 65,
        "mother_tongue_influence_score": 65,
        "fluency_score": 70,
        "detailed_comments": "Lakshya demonstrates good communication confidence and can effectively convey his teaching concepts and experiences. His pronunciation is generally clear and understandable for international listeners. However, his fluency is affected by frequent grammatical errors, awkward sentence structures, and occasional filler words like 'uh' and 'so'. His vocabulary range is adequate for professional communication, though he sometimes struggles with precise expression. With continued practice focusing on sentence structure and reducing hesitations, he could significantly improve his business communication effectiveness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:52:53.278Z"
    }
  },
  {
    "candidate_id": 14666,
    "candidate_name": "Mahalakshmi V",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Lakshmi",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 65,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 60,
        "fluency_score": 50,
        "detailed_comments": "Lakshmi demonstrates genuine passion for teaching and shows good conceptual understanding of educational methods. Her pronunciation is generally clear and understandable for international listeners. However, her fluency is significantly impacted by frequent pauses, restarts, and excessive use of filler words like 'uh', 'um', and 'like' throughout responses. Grammar issues include incomplete sentences, incorrect prepositions, and some structural problems that occasionally affect clarity. With practice to reduce hesitations and improve sentence flow, she could communicate more effectively in professional settings."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:53:05.626Z"
    }
  },
  {
    "candidate_id": 14676,
    "candidate_name": "Mathi T",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Abhinaya",
        "overall_score": 72,
        "pronunciation_score": 85,
        "grammar_score": 65,
        "vocabulary_score": 75,
        "filler_words_score": 55,
        "mother_tongue_influence_score": 70,
        "fluency_score": 68,
        "detailed_comments": "Abhinaya demonstrates strong pronunciation and clear communication that would be easily understood in a professional environment. Her vocabulary is appropriate for teaching contexts and she effectively uses real-life examples to explain concepts. However, her fluency is impacted by frequent filler words (like, uh, so) and some grammatical inconsistencies including article usage and sentence structure. While her passion for teaching comes through clearly, reducing hesitations and fillers would significantly improve her professional communication confidence."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:53:17.150Z"
    }
  },
  {
    "candidate_id": 14832,
    "candidate_name": "MD ASHIF",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Mohammed Asif",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 65,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 60,
        "fluency_score": 58,
        "detailed_comments": "Mohammed demonstrates good pronunciation and is generally understandable, with solid vocabulary for explaining mathematical concepts. However, his fluency is significantly impacted by frequent filler words (uh, like, basically) and hesitations that disrupt the natural flow of speech. Grammar issues include article usage, preposition errors, and sentence structure problems that occasionally affect clarity. While he shows teaching expertise and can communicate his ideas, reducing fillers and improving sentence construction would enhance his professional communication effectiveness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:53:30.471Z"
    }
  },
  {
    "candidate_id": 14659,
    "candidate_name": "name",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Lamitan",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 40,
        "fluency_score": 30,
        "detailed_comments": "Lamitan demonstrates basic communication ability but faces significant fluency challenges with frequent incomplete sentences, excessive filler words (um, uh), and fragmented thoughts that impact comprehension. While pronunciation is generally clear and educational background is evident, the candidate struggles to express complex ideas coherently and often leaves responses unfinished. Grammar issues and mother tongue influence further hinder professional communication effectiveness, requiring substantial improvement for business readiness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:53:40.310Z"
    }
  },
  {
    "candidate_id": 14557,
    "candidate_name": "Naresh Chockalingam ",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Naresh",
        "overall_score": 72,
        "pronunciation_score": 85,
        "grammar_score": 65,
        "vocabulary_score": 80,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 70,
        "fluency_score": 68,
        "detailed_comments": "Naresh demonstrates strong technical vocabulary and clear pronunciation, making him easily understandable in a professional context. His responses show deep subject matter expertise and logical thinking. However, his fluency is significantly impacted by excessive use of filler words (uh, um, so) and frequent pauses, which affects his overall communication confidence. While his grammar has some structural issues typical of native language influence, his ideas are well-articulated and his passion for teaching mathematics comes through clearly."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:53:51.401Z"
    }
  },
  {
    "candidate_id": 14732,
    "candidate_name": "Nikita N Kanbarkar",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 42,
        "pronunciation_score": 55,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 40,
        "mother_tongue_influence_score": 30,
        "fluency_score": 25,
        "detailed_comments": "The candidate demonstrates teaching passion and some relevant experience, but faces significant communication challenges that would impact professional effectiveness. Speech is frequently fragmented with incomplete sentences, making comprehension difficult for listeners. Strong mother tongue influence affects sentence structure and word order throughout responses. Grammar issues include incorrect verb tenses, missing articles, and unclear pronoun references that hinder understanding. While vocabulary shows some range, fluency is severely impacted by frequent pauses, restarts, and incomplete thoughts that would challenge student comprehension in a teaching environment."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:54:27.471Z"
    }
  },
  {
    "candidate_id": 14752,
    "candidate_name": "Pradeep",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Pradeep",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 65,
        "filler_words_score": 35,
        "mother_tongue_influence_score": 50,
        "fluency_score": 55,
        "detailed_comments": "Pradeep demonstrates good subject matter knowledge and teaching concepts, with clear pronunciation that makes him generally understandable. However, his fluency is significantly impacted by frequent filler words (uh, um) and hesitations throughout responses. Grammar issues include incorrect verb tenses, article usage, and sentence structure that sometimes affects clarity. His vocabulary is adequate for teaching contexts, though he tends to repeat phrases and could benefit from more varied expression to enhance professional communication effectiveness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:54:38.494Z"
    }
  },
  {
    "candidate_id": 14563,
    "candidate_name": "Prajwal Chikkagalagali",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 30,
        "fluency_score": 35,
        "detailed_comments": "The candidate demonstrates basic communication ability but faces significant challenges with fluency and excessive filler words that impede professional communication flow. Grammar issues including incorrect verb forms, article usage, and sentence structure create comprehension barriers. While pronunciation is generally clear and mathematical knowledge is evident, the heavy reliance on fillers like 'uh' and 'like' combined with incomplete thoughts significantly impacts overall effectiveness. Substantial improvement in fluency and reduction of hesitation markers would be needed for professional teaching communication."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:54:49.681Z"
    }
  },
  {
    "candidate_id": 14572,
    "candidate_name": "Pravalika Mashabattu",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Prawika",
        "overall_score": 42,
        "pronunciation_score": 55,
        "grammar_score": 25,
        "vocabulary_score": 45,
        "filler_words_score": 30,
        "mother_tongue_influence_score": 35,
        "fluency_score": 35,
        "detailed_comments": "Prawika demonstrates genuine passion for mathematics and teaching, with clear subject knowledge and teaching experience. However, her communication is significantly hindered by frequent grammatical errors, incomplete sentences, and excessive use of fillers like 'uh', 'like', and repetitive phrases. Her responses often lack clear structure and contain numerous false starts and self-corrections that impact comprehension. While her enthusiasm is evident, substantial improvement in English fluency, sentence construction, and organized expression would be needed for effective professional communication in an international online teaching environment."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:55:01.332Z"
    }
  },
  {
    "candidate_id": 14718,
    "candidate_name": "preeti Palni",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Preeti Palni",
        "overall_score": 68,
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 70,
        "filler_words_score": 60,
        "mother_tongue_influence_score": 65,
        "fluency_score": 70,
        "detailed_comments": "Preeti demonstrates good subject matter expertise and communicates her teaching philosophy clearly with adequate fluency for professional settings. Her pronunciation is generally clear and understandable, though there are noticeable grammar issues including article usage, verb tense consistency, and sentence structure that occasionally impact clarity. She uses moderate filler words and shows some mother tongue influence in sentence construction, but her passion for teaching comes through effectively and she can express complex educational concepts reasonably well."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:55:14.312Z"
    }
  },
  {
    "candidate_id": 14568,
    "candidate_name": "priya Bajaj",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Priya Bajaj",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 30,
        "fluency_score": 20,
        "detailed_comments": "Priya demonstrates genuine passion for teaching and shows subject knowledge, but faces significant fluency challenges with frequent false starts, self-corrections, and incomplete sentences that disrupt communication flow. Her pronunciation is generally clear, though heavy use of fillers like 'uh' and 'um' combined with grammatical errors and direct translations from her native language impact professional communication effectiveness. While her teaching concepts are sound, she would benefit from structured speaking practice to improve confidence and reduce hesitations before engaging in business communication roles."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:55:34.801Z"
    }
  },
  {
    "candidate_id": 14598,
    "candidate_name": "priyanka Agrawal",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Priyanka Agrawal",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 65,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 60,
        "fluency_score": 50,
        "detailed_comments": "Priyanka demonstrates clear pronunciation and genuine passion for teaching mathematics, making her easily understandable throughout the interview. Her vocabulary is appropriate for educational contexts and she effectively uses real-world examples to explain concepts. However, her fluency is significantly impacted by frequent filler words (uh, you know, like), repetitive phrasing, and incomplete sentence structures that disrupt the natural flow of communication. While her grammar shows consistent patterns of mother tongue influence with article usage and sentence construction, her core message and teaching philosophy come through clearly, indicating functional professional communication ability with room for improvement in confidence and speech organization."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:55:46.295Z"
    }
  },
  {
    "candidate_id": 14662,
    "candidate_name": "rajeev ranjan",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 58,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 60,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 50,
        "fluency_score": 40,
        "detailed_comments": "The candidate demonstrates good subject knowledge and teaching concepts but struggles significantly with fluency due to excessive filler words (uh, um, like) and frequent pauses that disrupt communication flow. While pronunciation is generally clear and vocabulary shows adequate range for teaching contexts, grammar issues with sentence structure and incomplete thoughts impact professional communication effectiveness. The candidate would benefit from practicing smoother delivery and reducing hesitation markers to improve overall business communication readiness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:55:58.702Z"
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
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 65,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 60,
        "fluency_score": 58,
        "detailed_comments": "The candidate demonstrates good pronunciation and clarity, making their speech generally understandable for professional communication. However, fluency is significantly impacted by frequent filler words (um, uh, actually) and hesitations throughout responses. Grammar shows consistent issues with article usage, verb tenses, and sentence structure that sometimes affect clarity. Vocabulary is adequate for teaching contexts but could be more varied and precise. With focused practice on reducing fillers and improving sentence flow, communication effectiveness could improve substantially."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:56:10.143Z"
    }
  },
  {
    "candidate_id": 14677,
    "candidate_name": "Reshu Jain",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 40,
        "fluency_score": 30,
        "detailed_comments": "The candidate demonstrates subject matter knowledge and teaching concepts but faces significant communication challenges. Speech is heavily fragmented with excessive filler words (uh, um) and frequent false starts that disrupt fluency. Grammar issues include incomplete sentences, incorrect verb forms, and awkward phrasing that sometimes obscures meaning. While pronunciation is generally clear and vocabulary shows professional awareness, the lack of fluency and coherent sentence structure would impact effectiveness in professional business communication requiring immediate improvement in speech organization and reduction of hesitations."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:56:21.147Z"
    }
  },
  {
    "candidate_id": 14705,
    "candidate_name": "sakshi bhardwaj",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Sakshi Bhartwaj",
        "overall_score": 58,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 60,
        "filler_words_score": 35,
        "mother_tongue_influence_score": 40,
        "fluency_score": 50,
        "detailed_comments": "Sakshi demonstrates good pronunciation and is generally understandable, with solid subject matter knowledge in mathematics education. However, her fluency is significantly impacted by frequent filler words (uh, like, you know), incomplete sentences, and self-corrections that disrupt the flow of communication. Grammar issues include incorrect verb forms, missing articles, and sentence fragments, while strong mother tongue influence affects sentence structure and word choice. To improve professional communication readiness, she should focus on reducing fillers, completing thoughts before speaking, and practicing smoother sentence construction."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:56:32.981Z"
    }
  },
  {
    "candidate_id": 14587,
    "candidate_name": "seema",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 58,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 60,
        "filler_words_score": 40,
        "mother_tongue_influence_score": 50,
        "fluency_score": 55,
        "detailed_comments": "The candidate demonstrates clear pronunciation and genuine passion for mathematics teaching, making her generally understandable in a professional context. However, frequent grammatical errors, excessive filler words (um, uh), and incomplete sentence structures significantly impact fluency and professional communication effectiveness. Strong subject knowledge is evident, but language delivery needs improvement for confident business communication. With focused practice on reducing fillers and improving sentence construction, communication skills could advance considerably."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:56:46.140Z"
    }
  },
  {
    "candidate_id": 14748,
    "candidate_name": "Seema Kothari",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Seema Kothari",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 70,
        "filler_words_score": 40,
        "mother_tongue_influence_score": 60,
        "fluency_score": 50,
        "detailed_comments": "Seema demonstrates good subject matter knowledge and teaching experience, with clear pronunciation that makes her generally understandable. However, her fluency is significantly impacted by excessive filler words (uh, um, you know) and frequent pauses that disrupt the natural flow of speech. Her grammar shows inconsistencies in sentence structure and verb tenses, while her vocabulary is appropriate for the teaching context. To improve professional communication readiness, she should focus on reducing fillers and practicing smoother speech delivery."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:56:56.601Z"
    }
  },
  {
    "candidate_id": 14542,
    "candidate_name": "shaik Chameli",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Sheikh Chamedi",
        "overall_score": 58,
        "pronunciation_score": 70,
        "grammar_score": 45,
        "vocabulary_score": 60,
        "filler_words_score": 40,
        "mother_tongue_influence_score": 50,
        "fluency_score": 55,
        "detailed_comments": "Sheikh demonstrates good subject knowledge and teaching passion with clear pronunciation that aids comprehension. However, frequent filler words (uh, like, means), incomplete sentences, and grammatical errors significantly impact fluency and professional communication effectiveness. Strong improvement needed in sentence structure, reducing hesitations, and organizing thoughts before speaking to meet business communication standards."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:57:05.647Z"
    }
  },
  {
    "candidate_id": 14630,
    "candidate_name": "Shalu Rajdev Popat",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Kumar",
        "overall_score": 42,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 50,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 40,
        "fluency_score": 30,
        "detailed_comments": "The candidate demonstrates subject matter knowledge and teaching experience but faces significant communication challenges. Speech is frequently fragmented with incomplete sentences, excessive fillers (like, uh, so), and unclear thought progression that would impact professional effectiveness. While pronunciation is generally understandable, the lack of fluency and coherent sentence structure creates comprehension difficulties. Grammar issues include incomplete sentences, incorrect verb forms, and awkward phrasing that stems from mother tongue influence. Vocabulary is adequate for basic communication but lacks professional polish and precision needed for effective online teaching."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:57:38.302Z"
    }
  },
  {
    "candidate_id": 14593,
    "candidate_name": "Sheyama",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Subramanian",
        "overall_score": 52,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 50,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 55,
        "fluency_score": 35,
        "detailed_comments": "Subramanian demonstrates clear pronunciation and basic communication ability, but struggles significantly with fluency due to excessive filler words and frequent pauses. While his ideas are generally understandable, the heavy use of 'um' and 'uh' throughout responses creates a hesitant delivery that impacts professional confidence. Grammar issues include incomplete sentences and word order problems, though they don't completely block comprehension. To improve business communication readiness, focus on reducing filler words, practicing smoother speech flow, and developing more complete sentence structures."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:57:48.548Z"
    }
  },
  {
    "candidate_id": 14545,
    "candidate_name": "Suja Ayers",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 72,
        "pronunciation_score": 80,
        "grammar_score": 65,
        "vocabulary_score": 75,
        "filler_words_score": 55,
        "mother_tongue_influence_score": 70,
        "fluency_score": 70,
        "detailed_comments": "The candidate demonstrates good communication effectiveness with clear pronunciation and appropriate professional vocabulary. She shows confidence in explaining teaching concepts and provides relevant examples from her experience. However, frequent use of filler words (um, uh, you know) and some incomplete sentences affect fluency. Grammar issues include article usage and sentence structure, but these don't significantly impede understanding. Overall, she communicates well enough for professional settings with room for improvement in reducing hesitations."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:57:58.486Z"
    }
  },
  {
    "candidate_id": 14680,
    "candidate_name": "sumit dwivedi ",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Sumit Dvidi",
        "overall_score": 52,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 55,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 40,
        "fluency_score": 45,
        "detailed_comments": "Sumit demonstrates genuine enthusiasm for teaching and shows good conceptual understanding of educational approaches. However, his communication is significantly hindered by frequent filler words, incomplete sentences, and grammatical errors that sometimes impact comprehension. His pronunciation is generally clear, but the heavy use of 'uh', 'um', and 'basically' disrupts fluency. Strong mother tongue influence is evident in sentence structure and word choices like 'max' for 'math' and awkward phrasings. While his teaching concepts are sound, he needs substantial improvement in English fluency and confidence for effective professional communication."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:58:09.731Z"
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
        "pronunciation_score": 65,
        "grammar_score": 45,
        "vocabulary_score": 50,
        "filler_words_score": 35,
        "mother_tongue_influence_score": 40,
        "fluency_score": 40,
        "detailed_comments": "Sunanda demonstrates genuine enthusiasm for teaching and shows good conceptual understanding of math education principles, particularly using real-world examples like pizza and candies to explain fractions. However, her communication is significantly impacted by excessive filler words (uh, um), frequent false starts, and incomplete sentences that disrupt the flow of ideas. Her pronunciation is generally clear, but grammar errors and mother tongue influence affect professional communication effectiveness. With practice to reduce hesitations and improve sentence structure, she could develop into an effective communicator."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:58:19.650Z"
    }
  },
  {
    "candidate_id": 14574,
    "candidate_name": "swetha chittoor",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Shweta",
        "overall_score": 58,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 60,
        "filler_words_score": 35,
        "mother_tongue_influence_score": 50,
        "fluency_score": 45,
        "detailed_comments": "Shweta demonstrates good subject knowledge and teaching concepts, with clear pronunciation that makes her generally understandable. However, her fluency is significantly impacted by excessive filler words (um, uh, and all) and frequent pauses that disrupt the flow of communication. Grammar issues include incorrect verb forms, article usage, and sentence structure, though her ideas remain comprehensible. To improve professional readiness, she should focus on reducing fillers, practicing smoother speech delivery, and refining sentence construction while maintaining her enthusiasm for teaching."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:58:31.372Z"
    }
  },
  {
    "candidate_id": 14592,
    "candidate_name": "venkata padmavathi g",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Candidate",
        "overall_score": 52,
        "pronunciation_score": 65,
        "grammar_score": 35,
        "vocabulary_score": 45,
        "filler_words_score": 25,
        "mother_tongue_influence_score": 30,
        "fluency_score": 40,
        "detailed_comments": "The candidate demonstrates genuine passion for teaching and can communicate basic ideas, but faces significant fluency challenges with frequent pauses, fillers, and incomplete sentences. Grammar issues include incorrect verb forms, missing articles, and awkward sentence structures that sometimes impede comprehension. Strong mother tongue influence is evident in word order and phrase construction. While pronunciation is generally clear, the excessive use of fillers and broken sentence patterns would impact professional communication effectiveness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:58:41.082Z"
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
        "pronunciation_score": 78,
        "grammar_score": 65,
        "vocabulary_score": 72,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 70,
        "fluency_score": 62,
        "detailed_comments": "Vignesh demonstrates good communication effectiveness with clear pronunciation and appropriate vocabulary for professional contexts. His passion for teaching comes through well, and he provides relevant examples from his experience. However, his fluency is significantly impacted by excessive filler words (um, uh, and) and frequent pauses that disrupt the natural flow of speech. While his grammar has some issues with sentence structure and article usage, these don't severely impact comprehension. To improve, he should focus on reducing filler words and practicing smoother delivery while maintaining his engaging storytelling approach."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:58:51.201Z"
    }
  },
  {
    "candidate_id": 14694,
    "candidate_name": "VIGNESHWARAN R",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Vigneshwaran",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 45,
        "vocabulary_score": 70,
        "filler_words_score": 40,
        "mother_tongue_influence_score": 50,
        "fluency_score": 55,
        "detailed_comments": "Vigneshwaran demonstrates good pronunciation and vocabulary range with clear passion for teaching mathematics. However, his fluency is significantly impacted by excessive filler words (uh, um, so, actually) and frequent self-corrections that disrupt the natural flow of speech. Grammar issues include inconsistent verb tenses, article usage, and sentence structure problems that occasionally affect clarity. While his ideas are generally understandable and he shows strong subject knowledge, reducing fillers and improving sentence construction would greatly enhance his professional communication effectiveness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:59:28.723Z"
    }
  },
  {
    "candidate_id": 14679,
    "candidate_name": "Vishakha Gehlot",
    "evaluation": {
      "success": true,
      "data": {
        "name": "Vishakha Dhalod",
        "overall_score": 62,
        "pronunciation_score": 75,
        "grammar_score": 55,
        "vocabulary_score": 65,
        "filler_words_score": 45,
        "mother_tongue_influence_score": 60,
        "fluency_score": 58,
        "detailed_comments": "Vishakha demonstrates good pronunciation and is generally understandable, with solid vocabulary for teaching contexts. However, her fluency is significantly impacted by excessive filler words (um, uh, you know) and frequent incomplete sentences. Grammar issues include subject-verb disagreements and awkward sentence structures that sometimes affect clarity. While she shows teaching knowledge and enthusiasm, reducing fillers and improving sentence completion would greatly enhance her professional communication effectiveness."
      },
      "model": "claude",
      "timestamp": "2026-02-07T08:59:38.447Z"
    }
  }
]