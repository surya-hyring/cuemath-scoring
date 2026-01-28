export interface CandidateEvaluation {
  name: string;
  overall_score: number;
  pronunciation_score?: number;
  grammar_score?: number;
  vocabulary_score?: number;
  filler_words_score?: number;
  mother_tongue_influence_score?: number;
  fluency_score?: number;
  detailed_comments: string;
}

export interface ClientEvaluation {
  name: string;
  score: number | null;
  detailed_comments: string;
  category: 'good_b2' | 'bad_b2';
}

export const chatgptEvaluations: CandidateEvaluation[] = [
  {
    name: "Ajay Kumar Sharma",
    overall_score: 62,
    pronunciation_score: 60,
    grammar_score: 55,
    vocabulary_score: 63,
    filler_words_score: 52,
    mother_tongue_influence_score: 65,
    fluency_score: 66,
    detailed_comments: "The candidate communicates ideas clearly and is generally understandable, though pronunciation and sentence construction occasionally require effort from the listener. Fluency is functional with the ability to sustain speech, but frequent fillers and repetitions reduce confidence. Vocabulary is adequate for teaching contexts but lacks variety at times. Grammar errors are noticeable but do not significantly block meaning. Overall, the candidate is moderately effective for professional communication with scope for improvement in clarity and confidence."
  },
  {
    name: "Heena Sagar Jain",
    overall_score: 58,
    pronunciation_score: 58,
    grammar_score: 52,
    vocabulary_score: 60,
    filler_words_score: 45,
    mother_tongue_influence_score: 62,
    fluency_score: 61,
    detailed_comments: "The candidate shows enthusiasm and warmth while speaking, which helps engagement. However, frequent fillers and hesitations interrupt fluency and reduce overall confidence. Grammar accuracy is inconsistent, though meaning is usually clear. Vocabulary is sufficient for everyday teaching communication but tends to be repetitive. With focused practice on reducing fillers and structuring responses, professional communication effectiveness can improve."
  },
  {
    name: "Kajal Bagdai",
    overall_score: 72,
    pronunciation_score: 70,
    grammar_score: 68,
    vocabulary_score: 75,
    filler_words_score: 60,
    mother_tongue_influence_score: 74,
    fluency_score: 78,
    detailed_comments: "The candidate communicates confidently with good fluency and a calm pace. Vocabulary range is strong and appropriate for professional and teaching contexts, allowing clear explanation of ideas. Minor grammar slips and occasional fillers are present but do not affect understanding. Pronunciation is clear and largely intelligible to international listeners. Overall, the candidate demonstrates good business communication readiness."
  },
  {
    name: "Lakshya",
    overall_score: 70,
    pronunciation_score: 72,
    grammar_score: 65,
    vocabulary_score: 70,
    filler_words_score: 60,
    mother_tongue_influence_score: 75,
    fluency_score: 74,
    detailed_comments: "The candidate speaks with reasonable confidence and maintains a steady flow of speech. Pronunciation is mostly clear, and ideas are understandable without much effort. Grammar mistakes occur but rarely block meaning. Vocabulary is appropriate though somewhat repetitive. With better sentence structuring and reduced fillers, the candidate can reach a stronger professional communication level."
  },
  {
    name: "Mohammed Asif",
    overall_score: 68,
    pronunciation_score: 65,
    grammar_score: 60,
    vocabulary_score: 70,
    filler_words_score: 55,
    mother_tongue_influence_score: 70,
    fluency_score: 73,
    detailed_comments: "The candidate demonstrates good subject clarity and maintains continuous speech with fair confidence. Pronunciation is understandable, though occasional accent influence and fillers appear. Grammar accuracy is moderate and sometimes inconsistent. Vocabulary usage is suitable for academic and teaching discussions. Overall communication is effective, with improvement needed in grammatical precision and filler reduction."
  },
  {
    name: "Naresh Chokalingam",
    overall_score: 82,
    pronunciation_score: 78,
    grammar_score: 80,
    vocabulary_score: 88,
    filler_words_score: 70,
    mother_tongue_influence_score: 85,
    fluency_score: 86,
    detailed_comments: "The candidate displays strong fluency and confidence with well-structured explanations. Vocabulary is advanced and precise, well-suited for professional and academic communication. Grammar control is strong, with only minor lapses. Pronunciation is clear and easily understandable to an international audience. Overall, the candidate shows high readiness for business and professional communication."
  },
  {
    name: "Preeti Palni",
    overall_score: 71,
    pronunciation_score: 70,
    grammar_score: 65,
    vocabulary_score: 72,
    filler_words_score: 62,
    mother_tongue_influence_score: 73,
    fluency_score: 76,
    detailed_comments: "The candidate communicates clearly with a calm and steady delivery. Fluency is good, with the ability to maintain conversation without long pauses. Vocabulary is appropriate and functional for teaching contexts. Grammar errors occur but rarely disrupt understanding. Overall, the candidate is well-prepared for professional communication with minor areas to refine."
  },
  {
    name: "Seema Kothari",
    overall_score: 64,
    pronunciation_score: 62,
    grammar_score: 58,
    vocabulary_score: 68,
    filler_words_score: 55,
    mother_tongue_influence_score: 70,
    fluency_score: 68,
    detailed_comments: "The candidate presents ideas clearly but with noticeable hesitation and incomplete responses at times. Fluency is moderate, and confidence fluctuates during longer explanations. Vocabulary is suitable for professional use, though delivery lacks consistency. Grammar errors are present but meaning is generally clear. Improved structure and confidence would enhance business communication effectiveness."
  },
  {
    name: "Seema",
    overall_score: 66,
    pronunciation_score: 64,
    grammar_score: 60,
    vocabulary_score: 68,
    filler_words_score: 58,
    mother_tongue_influence_score: 72,
    fluency_score: 70,
    detailed_comments: "The candidate maintains understandable speech with moderate fluency. Pronunciation and accent are acceptable and do not significantly hinder comprehension. Grammar accuracy varies but key ideas are conveyed effectively. Vocabulary is adequate for teaching and professional discussion. With reduced fillers and clearer sentence framing, communication impact would improve."
  },
  {
    name: "Shaik Chemali",
    overall_score: 61,
    pronunciation_score: 58,
    grammar_score: 55,
    vocabulary_score: 63,
    filler_words_score: 50,
    mother_tongue_influence_score: 65,
    fluency_score: 64,
    detailed_comments: "The candidate is understandable but shows frequent pauses and repetitions that affect fluency. Pronunciation is acceptable, though clarity varies in longer responses. Grammar control is limited but does not completely block meaning. Vocabulary is functional but lacks variety. Overall communication is moderate, with clear scope for improvement in confidence and smooth delivery."
  }
];

export const claudeEvaluations: CandidateEvaluation[] = [
  {
    name: "Ajay Kumar Sharma",
    overall_score: 62,
    pronunciation_score: 65,
    grammar_score: 55,
    vocabulary_score: 60,
    filler_words_score: 50,
    mother_tongue_influence_score: 60,
    fluency_score: 58,
    detailed_comments: "Ajay demonstrates functional English communication with moderate fluency and comprehensible pronunciation. His responses show good conceptual understanding and teaching passion, though grammar issues are frequent (verb tense inconsistencies, article omissions). He uses excessive filler words ('uh', 'like', 'basically') which interrupt flow. Vocabulary is adequate for teaching contexts with some repetition. Mother tongue influence is noticeable in sentence construction but doesn't severely impede understanding. Would benefit from practice reducing fillers and improving grammatical accuracy while maintaining his evident enthusiasm."
  },
  {
    name: "Heena Sagar Jain",
    overall_score: 58,
    pronunciation_score: 62,
    grammar_score: 50,
    vocabulary_score: 55,
    filler_words_score: 45,
    mother_tongue_influence_score: 58,
    fluency_score: 55,
    detailed_comments: "Heena communicates with reasonable clarity but shows significant hesitations and grammatical challenges. Her responses contain frequent filler words ('uh', 'you know', 'like') and incomplete sentences that disrupt fluency. Grammar errors include verb tense shifts, preposition misuse, and article problems. Vocabulary is functional but somewhat limited and repetitive. Mother tongue influence appears in sentence structure patterns. She demonstrates genuine teaching experience and warmth, but needs improvement in sentence completion and reducing verbal pauses to enhance professional communication effectiveness."
  },
  {
    name: "Kajal Bagdai",
    overall_score: 74,
    pronunciation_score: 78,
    grammar_score: 70,
    vocabulary_score: 75,
    filler_words_score: 60,
    mother_tongue_influence_score: 72,
    fluency_score: 76,
    detailed_comments: "Kajal demonstrates good English proficiency with clear pronunciation and confident delivery. Her vocabulary is appropriately varied with professional terminology, and she articulates teaching concepts well. Grammar is generally accurate with occasional article and preposition errors. Some filler words ('uh', 'um') are present but don't significantly disrupt communication flow. Fluency is strong with natural pacing and coherent thought expression. Mother tongue influence is minimal and doesn't affect comprehension. Overall, she presents as a competent communicator ready for professional online teaching environments."
  },
  {
    name: "Lakshay",
    overall_score: 76,
    pronunciation_score: 80,
    grammar_score: 72,
    vocabulary_score: 78,
    filler_words_score: 65,
    mother_tongue_influence_score: 75,
    fluency_score: 80,
    detailed_comments: "Lakshay exhibits strong English communication skills with excellent fluency and confident delivery. His pronunciation is clear and easily understood internationally. Vocabulary is rich and appropriate for professional teaching contexts, demonstrating ability to explain complex concepts effectively. Grammar is largely accurate with minor issues in article usage and occasional preposition errors. Filler words are present but minimal and don't detract from overall communication quality. Mother tongue influence is barely noticeable. He demonstrates strong readiness for professional English-medium teaching roles with smooth, natural speech patterns."
  },
  {
    name: "MD Ashif",
    overall_score: 65,
    pronunciation_score: 68,
    grammar_score: 58,
    vocabulary_score: 65,
    filler_words_score: 55,
    mother_tongue_influence_score: 65,
    fluency_score: 62,
    detailed_comments: "MD Ashif communicates with moderate proficiency showing both strengths and areas for improvement. His pronunciation is generally clear though mother tongue influence is noticeable in certain sound patterns. Grammar issues include verb tense inconsistencies and article omissions that occasionally affect clarity. He uses appropriate technical vocabulary for mathematics teaching but shows some repetition. Filler words ('uh', 'like') appear regularly and impact fluency. Despite these challenges, he conveys teaching concepts adequately and demonstrates subject knowledge. Would benefit from more practice with natural English sentence flow and reducing verbal pauses."
  },
  {
    name: "Naresh Chokalingam",
    overall_score: 88,
    pronunciation_score: 90,
    grammar_score: 85,
    vocabulary_score: 92,
    filler_words_score: 80,
    mother_tongue_influence_score: 88,
    fluency_score: 90,
    detailed_comments: "Naresh demonstrates exceptional English proficiency with near-native fluency and sophisticated vocabulary. His pronunciation is excellent with clear articulation and minimal accent interference. Grammar accuracy is very high with only minor, rare errors. He employs advanced academic vocabulary naturally and explains complex mathematical concepts with precision. Filler words are minimal and don't disrupt communication. Mother tongue influence is negligible. His speech flows naturally with confidence and appropriate pacing. He represents the highest level of professional English communication readiness, suitable for any international teaching or academic environment."
  },
  {
    name: "Preeti Plani",
    overall_score: 70,
    pronunciation_score: 72,
    grammar_score: 65,
    vocabulary_score: 70,
    filler_words_score: 60,
    mother_tongue_influence_score: 68,
    fluency_score: 72,
    detailed_comments: "Preeti demonstrates good functional English with clear communication of teaching concepts. Her pronunciation is generally comprehensible with some mother tongue influence that doesn't significantly impede understanding. Grammar shows common errors in articles, verb forms, and sentence structure but ideas remain clear. Vocabulary is appropriate for educational contexts though somewhat repetitive. Some filler words ('um', 'like') appear but not excessively. Fluency is reasonable with occasional hesitations. She effectively conveys her teaching philosophy and methods, showing readiness for online teaching with room for refinement in grammatical accuracy."
  },
  {
    name: "Seema Kothari",
    overall_score: 72,
    pronunciation_score: 75,
    grammar_score: 68,
    vocabulary_score: 73,
    filler_words_score: 65,
    mother_tongue_influence_score: 70,
    fluency_score: 74,
    detailed_comments: "Seema displays good English proficiency with professional vocabulary reflecting her chartered accountant background. Her pronunciation is clear and easily understood. Grammar is generally accurate with occasional article and preposition issues. Vocabulary is appropriately varied with business and educational terms used naturally. Filler words are present but moderate ('uh', 'you know'). Fluency is good with confident delivery and natural pacing. Mother tongue influence is noticeable but doesn't impede communication. She demonstrates strong communication skills suitable for professional online teaching, with only minor areas for grammatical refinement."
  },
  {
    name: "Seema",
    overall_score: 64,
    pronunciation_score: 66,
    grammar_score: 58,
    vocabulary_score: 62,
    filler_words_score: 55,
    mother_tongue_influence_score: 65,
    fluency_score: 62,
    detailed_comments: "Seema communicates with moderate proficiency showing functional English skills for teaching contexts. Her pronunciation is generally comprehensible with noticeable mother tongue influence. Grammar issues are frequent including verb tense errors, article omissions, and awkward sentence constructions. Vocabulary is adequate but somewhat limited with repetitive phrases. Filler words appear regularly affecting speech flow. Fluency shows hesitations and incomplete thoughts at times. Despite these challenges, she conveys basic teaching concepts and demonstrates passion for education. Would benefit from focused grammar practice and sentence construction improvement to enhance professional communication effectiveness."
  },
  {
    name: "Shaik Chemali",
    overall_score: 68,
    pronunciation_score: 70,
    grammar_score: 62,
    vocabulary_score: 68,
    filler_words_score: 58,
    mother_tongue_influence_score: 68,
    fluency_score: 68,
    detailed_comments: "Shaik demonstrates moderate to good English proficiency with functional communication skills. Her pronunciation is generally clear with some mother tongue influence that remains comprehensible. Grammar shows common errors in articles, verb forms, and sentence structure consistency. Vocabulary is appropriate for teaching mathematics with good technical terms, though some explanations could be more concise. Filler words ('uh', 'like') appear moderately. Fluency is reasonable with occasional hesitations when formulating complex thoughts. She effectively communicates teaching methods and shows enthusiasm for online education. Would benefit from grammar refinement and more structured sentence construction."
  }
];

export const geminiEvaluations: CandidateEvaluation[] = [
  {
    name: "Ajay Kumar Sharma",
    overall_score: 74.25,
    pronunciation_score: 75,
    grammar_score: 68,
    vocabulary_score: 72,
    filler_words_score: 70,
    mother_tongue_influence_score: 75,
    fluency_score: 80,
    detailed_comments: "Ajay demonstrates a strong ability to communicate his professional background and teaching methods with good confidence and flow. While there are noticeable grammatical inconsistencies and some repetitive use of basic conjunctions, his speech is clear and easily intelligible. His primary strength lies in his functional fluency, though reducing filler usage and refining sentence structure would enhance his professional impact."
  },
  {
    name: "Heena Sagar Jain",
    overall_score: 63.75,
    pronunciation_score: 70,
    grammar_score: 60,
    vocabulary_score: 65,
    filler_words_score: 50,
    mother_tongue_influence_score: 70,
    fluency_score: 65,
    detailed_comments: "Heena is a functional speaker who can convey her ideas, but her speech is frequently interrupted by filler words and hesitations. Her vocabulary is sufficient for basic professional interactions, though she tends to rely on simple sentence structures. To improve, she should focus on reducing reliance on 'um' and 'uh' to build a more continuous and confident speaking pace."
  },
  {
    name: "Kajal Bagdai",
    overall_score: 79.9,
    pronunciation_score: 82,
    grammar_score: 80,
    vocabulary_score: 85,
    filler_words_score: 65,
    mother_tongue_influence_score: 80,
    fluency_score: 82,
    detailed_comments: "Kajal exhibits a very good command of English with a sophisticated vocabulary and the ability to express complex thoughts about student psychology and teaching philosophy. Her speech is natural and confident, although it is occasionally punctuated by repetitive fillers during transitions. Overall, she is highly effective in a professional setting due to her clear articulation and strong expressive range."
  },
  {
    name: "Lakshay",
    overall_score: 76.8,
    pronunciation_score: 78,
    grammar_score: 72,
    vocabulary_score: 75,
    filler_words_score: 85,
    mother_tongue_influence_score: 75,
    fluency_score: 78,
    detailed_comments: "Lakshay presents himself with a high level of confidence and a very steady pace of speech. He uses fewer filler words than many other candidates, which significantly boosts his perceived fluency and professionalism. While there are minor errors in subject-verb agreement and tense, they do not hinder comprehension, making him a very effective communicator for a business environment."
  },
  {
    name: "Md Ashif",
    overall_score: 72.1,
    pronunciation_score: 75,
    grammar_score: 65,
    vocabulary_score: 70,
    filler_words_score: 75,
    mother_tongue_influence_score: 75,
    fluency_score: 74,
    detailed_comments: "Md Ashif is a capable speaker who can describe technical and professional experiences with reasonable clarity. He maintains a functional flow of speech, though his grammar often slips when explaining complex scenarios. His pronunciation is clear, and he manages filler words well, but expanding his vocabulary to avoid repetitive phrasing would help elevate his communication."
  },
  {
    name: "Naresh Chokalingam",
    overall_score: 84.15,
    pronunciation_score: 85,
    grammar_score: 82,
    vocabulary_score: 88,
    filler_words_score: 75,
    mother_tongue_influence_score: 80,
    fluency_score: 86,
    detailed_comments: "Naresh demonstrates excellent proficiency with an impressive range of vocabulary suited for high-level academic and professional discourse. His speech is smooth, confident, and very easy to follow, even when discussing complex subject matter like computational mechanics. Minor hesitations are present but do not detract from his overall strong delivery and professional presence."
  },
  {
    name: "Preeti Plani",
    overall_score: 73.1,
    pronunciation_score: 75,
    grammar_score: 68,
    vocabulary_score: 72,
    filler_words_score: 75,
    mother_tongue_influence_score: 75,
    fluency_score: 76,
    detailed_comments: "Preeti is a passionate and confident communicator who successfully expresses her teaching philosophy and experiences. She maintains a good pace, though her speech contains some grammatical errors typical of a non-native speaker. Her ability to be understood is high, and her confidence in speaking compensates for minor technical inaccuracies in her language usage."
  },
  {
    name: "Seema Kothari",
    overall_score: 76.95,
    pronunciation_score: 80,
    grammar_score: 75,
    vocabulary_score: 78,
    filler_words_score: 70,
    mother_tongue_influence_score: 78,
    fluency_score: 79,
    detailed_comments: "Seema speaks with clarity and a professional tone, drawing effectively on her background as a chartered accountant. She displays a solid vocabulary and generally good sentence structure, with a natural flow that makes her easy to understand. Reducing the frequency of filler words during transitions would further polish her already strong communication skills."
  },
  {
    name: "Seema",
    overall_score: 71.3,
    pronunciation_score: 72,
    grammar_score: 65,
    vocabulary_score: 70,
    filler_words_score: 75,
    mother_tongue_influence_score: 75,
    fluency_score: 74,
    detailed_comments: "Seema communicates with a fair degree of confidence and is able to explain her teaching methods using relatable examples. Her fluency is functional, though she occasionally struggles with complex sentence constructions and verb tenses. She remains intelligible throughout, but focusing on grammatical accuracy and smoother transitions would improve her professional rating."
  },
  {
    name: "Shaik Chemali",
    overall_score: 74.05,
    pronunciation_score: 74,
    grammar_score: 68,
    vocabulary_score: 75,
    filler_words_score: 75,
    mother_tongue_influence_score: 75,
    fluency_score: 77,
    detailed_comments: "Shaik is a confident speaker who uses a good range of vocabulary to describe educational strategies and technological tools. While there are notable grammatical errors and some native language influence in sentence patterns, his speech flow is consistent and engaging. He is successful in conveying his message clearly, which is a key strength in a professional context."
  }
];

export const qwenEvaluations: CandidateEvaluation[] = [
  {
    name: "Kajal Bagdai",
    overall_score: 70,
    pronunciation_score: 80,
    grammar_score: 70,
    vocabulary_score: 75,
    filler_words_score: 45,
    mother_tongue_influence_score: 80,
    fluency_score: 65,
    detailed_comments: "The candidate demonstrates good English proficiency, with clear pronunciation and a generally understandable accent that does not impede communication. Her vocabulary is appropriate for a professional setting, and her grammatical structures are mostly accurate. To further enhance her communication effectiveness, the candidate could focus on reducing the frequency of filler words and practicing smoother transitions between thoughts to improve overall fluency and confidence."
  },
  {
    name: "Seema Kothari",
    overall_score: 58,
    pronunciation_score: 75,
    grammar_score: 45,
    vocabulary_score: 60,
    filler_words_score: 40,
    mother_tongue_influence_score: 65,
    fluency_score: 55,
    detailed_comments: "The candidate's pronunciation is generally clear and understandable, with a noticeable but non-impeding accent. While her vocabulary is adequate for basic professional discourse, there are instances of awkward phrasing and repetition. The primary areas for improvement are grammar, where frequent errors in verb tense, article usage, and sentence structure are present, and fluency, which is impacted by hesitations and a moderate use of filler words. Focusing on grammatical accuracy and reducing fillers would significantly enhance her communication effectiveness."
  },
  {
    name: "Lakshay",
    overall_score: 65,
    pronunciation_score: 75,
    grammar_score: 60,
    vocabulary_score: 70,
    filler_words_score: 50,
    mother_tongue_influence_score: 70,
    fluency_score: 60,
    detailed_comments: "The candidate communicates effectively, with generally clear pronunciation that is easily understood by international audiences, despite a noticeable mother tongue influence. Their vocabulary is appropriate for professional discussions, though there's room for more varied expression. However, the presence of several grammatical inaccuracies, particularly with verb tenses and prepositions, along with frequent filler words and some hesitations, impacts overall fluency and confidence. Focusing on grammatical precision and reducing filler usage would significantly enhance their speaking proficiency."
  },
  {
    name: "Naresh Chockalingam S",
    overall_score: 73,
    pronunciation_score: 80,
    grammar_score: 70,
    vocabulary_score: 85,
    filler_words_score: 55,
    mother_tongue_influence_score: 75,
    fluency_score: 65,
    detailed_comments: "The candidate demonstrates strong proficiency in English, particularly in vocabulary, using precise technical terms effectively. Pronunciation is clear and easily understandable, with a noticeable but non-impeding mother tongue influence. While grammar is generally good, there are minor slips in article and preposition usage that do not hinder overall comprehension. However, fluency is somewhat affected by frequent pauses and filler words, indicating occasional hesitation in speech. Focusing on reducing these fillers would further enhance the natural flow and confidence of communication."
  },
  {
    name: "Heena Sagar Jain",
    overall_score: 66,
    pronunciation_score: 75,
    grammar_score: 60,
    vocabulary_score: 70,
    filler_words_score: 45,
    mother_tongue_influence_score: 65,
    fluency_score: 60,
    detailed_comments: "The candidate demonstrates functional English proficiency, effectively conveying information with generally clear pronunciation despite a noticeable accent. Vocabulary is appropriate for the context. To enhance communication, focusing on reducing filler words and refining grammatical accuracy, particularly with articles and prepositions, would be beneficial. Improving sentence structure and overall speech flow will further boost confidence and fluency."
  },
  {
    name: "Shaik Chameli",
    overall_score: 57,
    pronunciation_score: 70,
    grammar_score: 45,
    vocabulary_score: 50,
    filler_words_score: 55,
    mother_tongue_influence_score: 60,
    fluency_score: 60,
    detailed_comments: "The candidate demonstrates functional English proficiency, capable of conveying information, though with noticeable areas for improvement. Pronunciation is generally clear, allowing for understanding despite a discernible mother tongue influence. However, grammatical accuracy, particularly in article and preposition usage, along with sentence structure, frequently impacts the natural flow of speech. Expanding vocabulary and reducing reliance on filler words would significantly enhance overall fluency and confidence in professional communication."
  },
  {
    name: "Seema",
    overall_score: 72,
    pronunciation_score: 80,
    grammar_score: 70,
    vocabulary_score: 75,
    filler_words_score: 55,
    mother_tongue_influence_score: 75,
    fluency_score: 70,
    detailed_comments: "The candidate effectively communicates her professional background and teaching approach. Her pronunciation is clear and easily understandable, with a noticeable but non-impeding mother tongue influence. While her vocabulary is appropriate, there are some minor grammatical inaccuracies and a moderate use of filler words that occasionally disrupt the flow of speech. Improving sentence structure and reducing fillers would further enhance her overall fluency and confidence."
  },
  {
    name: "Preeti Palni",
    overall_score: 69,
    pronunciation_score: 80,
    grammar_score: 55,
    vocabulary_score: 70,
    filler_words_score: 75,
    mother_tongue_influence_score: 70,
    fluency_score: 65,
    detailed_comments: "Preeti demonstrates clear pronunciation and a good professional vocabulary, which aids in overall intelligibility. However, her grammar shows frequent errors, particularly with verb tenses, articles, and sentence structure, sometimes leading to awkward phrasing. While she attempts to express complex ideas, these grammatical issues and occasional hesitations impact her fluency. Focusing on grammatical accuracy and smoother sentence construction would significantly enhance her communication effectiveness."
  },
  {
    name: "Ajay Kumar Sharma",
    overall_score: 58,
    pronunciation_score: 70,
    grammar_score: 55,
    vocabulary_score: 65,
    filler_words_score: 40,
    mother_tongue_influence_score: 60,
    fluency_score: 50,
    detailed_comments: "The candidate effectively conveys basic information, demonstrating a foundational understanding of English. While pronunciation is generally clear despite a noticeable accent, frequent grammatical inaccuracies, especially with verb tenses and article usage, occasionally disrupt the flow. The vocabulary is appropriate but could benefit from more variety, and the use of filler words is quite high. Focusing on grammatical precision, expanding vocabulary, and practicing smoother delivery would significantly enhance overall communication effectiveness."
  },
  {
    name: "MD Ashif",
    overall_score: 63,
    pronunciation_score: 75,
    grammar_score: 60,
    vocabulary_score: 70,
    filler_words_score: 45,
    mother_tongue_influence_score: 70,
    fluency_score: 55,
    detailed_comments: "MD Ashif communicates his background and motivations clearly, demonstrating a good grasp of professional vocabulary and generally intelligible pronunciation despite a noticeable mother tongue influence. His grammar has some minor inaccuracies, particularly with articles and prepositions, but these do not impede comprehension. The primary areas for improvement are fluency and the reduction of filler words, as his speech often feels hesitant and punctuated by 'uh' and 'like.' Focusing on smoother delivery and practicing speaking without these verbal crutches would significantly enhance his communication effectiveness."
  }
];

export const clientEvaluations: ClientEvaluation[] = [
  {
    name: "Kajal Bagdai",
    score: 67,
    detailed_comments: "The candidate showed decent vocabulary, grammar, and confident communication.",
    category: 'good_b2'
  },
  {
    name: "Seema Kothari",
    score: 71,
    detailed_comments: "The candidate made a few minor grammatical errors (such as since/from), but overall communication was good and confident.",
    category: 'good_b2'
  },
  {
    name: "Lakshay",
    score: 71,
    detailed_comments: "The candidate has a few grammatical errors, but shows good confidence and articulation.",
    category: 'good_b2'
  },
  {
    name: "Naresh Chockalingam S",
    score: 71,
    detailed_comments: "The candidate has good confidence but is slightly less fluent.",
    category: 'good_b2'
  },
  {
    name: "Heena Jain",
    score: null,
    detailed_comments: "The candidate has average articulation, with no glaring errors.",
    category: 'good_b2'
  },
  {
    name: "Shaik Chameli",
    score: 66,
    detailed_comments: "The candidate's pronunciation is poor, and there are lot of grammatical errors.",
    category: 'bad_b2'
  },
  {
    name: "Seema",
    score: 66,
    detailed_comments: "The candidate's pronunciation is average, with lot of grammatical errors.",
    category: 'bad_b2'
  },
  {
    name: "Preeti Palni",
    score: 65,
    detailed_comments: "The candidate has low confidence, with poor pronunciation and grammatical errors.",
    category: 'bad_b2'
  },
  {
    name: "Ajay Kumar Sharma",
    score: 65,
    detailed_comments: "The candidate made lot of grammatical errors and was not able to articulate.",
    category: 'bad_b2'
  },
  {
    name: "MD Ashif",
    score: 66,
    detailed_comments: "The candidate's pronunciation and vocabulary is not upto the mark.",
    category: 'bad_b2'
  }
];

// Normalize candidate names for matching across sources
export function normalizeName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, ' ').trim();
}

// Get all unique candidate names across all sources
export function getAllCandidateNames(): string[] {
  const allNames = new Set<string>();
  
  chatgptEvaluations.forEach(e => allNames.add(normalizeName(e.name)));
  claudeEvaluations.forEach(e => allNames.add(normalizeName(e.name)));
  geminiEvaluations.forEach(e => allNames.add(normalizeName(e.name)));
  qwenEvaluations.forEach(e => allNames.add(normalizeName(e.name)));
  clientEvaluations.forEach(e => allNames.add(normalizeName(e.name)));
  
  return Array.from(allNames);
}
