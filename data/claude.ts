export type OpenAICandidateEvaluation = {
  candidate_id: number;
  candidate_name: string;
  evaluation: {
    success: boolean;
    data: {
      name: string;
      overall_score: number;
      pronunciation_score: number;
      grammar_score: number;
      vocabulary_score: number;
      filler_words_score: number;
      mother_tongue_influence_score: number;
      fluency_score: number;
      summary_points: string[];
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
          "name": "Ajay Kumar Sharma ",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 70,
          "mother_tongue_influence_score": 58,
          "fluency_score": 68,
          "summary_points": [
            "Demonstrates strong subject matter expertise in mathematics with clear passion for teaching and helping students understand concepts",
            "Shows good communication flow and maintains conversational pace throughout responses with adequate professional vocabulary",
            "Provides relevant examples and practical teaching strategies that show real classroom experience",
            "Sentence structure patterns occasionally create awkward phrasing that requires listener attention to follow meaning",
            "Grammar consistency could be improved to enhance overall professional communication clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:55:27.406Z"
      }
    },
    {
      "candidate_id": 14559,
      "candidate_name": "AVANTIKA",
      "evaluation": {
        "success": true,
        "data": {
          "name": "AVANTIKA",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine passion for teaching and connecting with students globally, with clear enthusiasm for making math engaging through real-life examples",
            "Demonstrates solid understanding of mathematical concepts and practical teaching approaches, including visual aids and conceptual explanations",
            "Communication is generally understandable with adequate vocabulary for professional teaching contexts",
            "Speech flow is frequently interrupted by excessive filler words and incomplete thoughts that impact overall clarity",
            "Grammar patterns and sentence structure would benefit from improvement to enhance professional communication effectiveness"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:55:56.797Z"
      }
    },
    {
      "candidate_id": 14706,
      "candidate_name": "CHARU GOYAL",
      "evaluation": {
        "success": true,
        "data": {
          "name": "CHARU GOYAL",
          "overall_score": 60,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 72,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates strong subject matter expertise in mathematics education with clear understanding of teaching methodologies and student engagement strategies",
            "Shows good professional vocabulary range and ability to explain complex educational concepts with appropriate examples and real-world applications",
            "Communication is generally understandable with adequate pronunciation for international professional settings",
            "Speech flow is occasionally interrupted by frequent filler words and hesitations that could benefit from practice to improve confidence",
            "Some grammatical patterns and sentence structures could be refined to enhance overall clarity in professional communication"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:56:08.412Z"
      }
    },
    {
      "candidate_id": 14687,
      "candidate_name": "Gayathri P",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Gayathri P",
          "overall_score": 52,
          "pronunciation_score": 62,
          "grammar_score": 48,
          "vocabulary_score": 55,
          "filler_words_score": 58,
          "mother_tongue_influence_score": 45,
          "fluency_score": 52,
          "summary_points": [
            "Shows genuine enthusiasm for teaching and demonstrates understanding of practical teaching methods like using real-life examples and hands-on activities",
            "Has relevant teaching experience with different age groups and understands the importance of student engagement and interaction",
            "Communication is significantly impacted by frequent grammar errors, incomplete sentences, and unclear sentence structures that make meaning difficult to follow",
            "Would benefit from focused practice on sentence completion and organizing thoughts before speaking to improve professional communication clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:56:17.909Z"
      }
    },
    {
      "candidate_id": 14547,
      "candidate_name": "Harish HG",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Harish HG",
          "overall_score": 58,
          "pronunciation_score": 70,
          "grammar_score": 62,
          "vocabulary_score": 60,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 55,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates genuine enthusiasm for mathematics and teaching, with clear passion for working with numbers and helping students understand concepts",
            "Shows good foundational understanding of teaching principles, including the importance of asking questions, relating concepts to daily life, and avoiding rote memorization",
            "Communication is generally understandable despite frequent pauses and hesitations throughout responses",
            "Heavy use of filler words and incomplete sentence structures significantly impacts the flow and clarity of explanations",
            "Would benefit from practicing more structured responses and reducing verbal hesitations to improve professional communication effectiveness"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:56:28.510Z"
      }
    },
    {
      "candidate_id": 14712,
      "candidate_name": "Heena Sagar Jain",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Heena Sagar Jain",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine passion for teaching and strong connection with students, with five years of coding instruction experience",
            "Demonstrates practical teaching approach using real-world examples, toys, and hands-on materials to make concepts accessible",
            "Communicates core ideas effectively and shows understanding of student-centered learning principles",
            "Speech flow needs improvement as frequent pauses and restarts can interrupt communication momentum",
            "Reducing filler words and developing more structured responses would enhance professional presentation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:56:38.550Z"
      }
    },
    {
      "candidate_id": 14617,
      "candidate_name": "kajal bagdai",
      "evaluation": {
        "success": true,
        "data": {
          "name": "kajal bagdai",
          "overall_score": 60,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 70,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 70,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates solid understanding of teaching concepts and shows genuine passion for mathematics education and working with children",
            "Communicates ideas clearly with good vocabulary range and generally understandable pronunciation for international audiences",
            "Shows ability to explain complex teaching methodologies using practical examples and real-world applications",
            "Speech flow is significantly impacted by excessive filler words and frequent hesitations that disrupt the natural rhythm of communication",
            "Would benefit from practicing smoother delivery and reducing dependency on fillers to enhance professional presentation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:56:49.295Z"
      }
    },
    {
      "candidate_id": 14597,
      "candidate_name": "kokilapriya",
      "evaluation": {
        "success": true,
        "data": {
          "name": "kokilapriya",
          "overall_score": 57,
          "pronunciation_score": 70,
          "grammar_score": 62,
          "vocabulary_score": 55,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine passion for teaching and helping students understand mathematical concepts clearly",
            "Demonstrates good awareness of effective teaching methods including visual learning, real-life examples, and breaking topics into simple steps",
            "Communication is generally understandable with clear pronunciation for international audiences",
            "Speech flow needs improvement as frequent pauses and fillers significantly disrupt the delivery of ideas",
            "Would benefit from expanding vocabulary range and developing more complete sentence structures to express teaching concepts more precisely"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:56:58.311Z"
      }
    },
    {
      "candidate_id": 14555,
      "candidate_name": "Kritika taneja",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Kritika taneja",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine passion for mathematics teaching and demonstrates subject knowledge with practical teaching methods like Vedic math and step-by-step explanations",
            "Communicates core ideas effectively and maintains professional enthusiasm throughout the conversation",
            "Speech flow is significantly impacted by excessive filler words and frequent pauses that disrupt the natural rhythm of communication",
            "Sentence structure often becomes fragmented or incomplete, requiring listener effort to follow the intended meaning",
            "Would benefit from practicing smoother delivery and reducing hesitation patterns to enhance professional presentation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:57:08.984Z"
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
          "grammar_score": 68,
          "vocabulary_score": 70,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 70,
          "fluency_score": 72,
          "summary_points": [
            "Demonstrates solid professional communication skills with clear expression of ideas and teaching concepts",
            "Shows good subject matter knowledge and practical teaching experience with specific examples",
            "Maintains consistent flow throughout responses with adequate vocabulary for professional context",
            "Grammar patterns occasionally affect sentence clarity but meaning remains understandable",
            "Could benefit from reducing filler words and self-corrections to enhance overall fluency"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:57:17.877Z"
      }
    },
    {
      "candidate_id": 14666,
      "candidate_name": "Mahalakshmi V",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Mahalakshmi V",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 68,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates genuine passion for teaching and shows good understanding of pedagogical concepts like visualization and student engagement",
            "Communicates core ideas effectively and maintains conversational flow throughout the interview despite some hesitations",
            "Shows ability to provide concrete examples and explain teaching methodologies with reasonable clarity",
            "Frequent use of filler words and occasional incomplete sentences could be reduced to enhance professional presentation",
            "Would benefit from practicing smoother transitions between ideas to improve overall fluency in professional discussions"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:57:27.973Z"
      }
    },
    {
      "candidate_id": 14676,
      "candidate_name": "Mathi T",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Mathi T",
          "overall_score": 60,
          "pronunciation_score": 75,
          "grammar_score": 72,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 68,
          "fluency_score": 68,
          "summary_points": [
            "Demonstrates genuine passion for mathematics education and shows strong understanding of teaching concepts through real-world examples and student engagement strategies",
            "Communicates ideas clearly with good pronunciation and maintains conversational flow throughout responses",
            "Shows solid professional vocabulary range appropriate for educational contexts and explains complex teaching methodologies effectively",
            "Frequent use of filler words and hesitations occasionally disrupts the natural flow of communication",
            "Some grammatical patterns and sentence structures could be refined for smoother professional delivery"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:57:37.694Z"
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
          "pronunciation_score": 72,
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates solid educational background and genuine passion for mathematics teaching with clear career progression from offline to online instruction",
            "Shows good understanding of mathematical concepts and can explain teaching methodologies with adequate professional vocabulary",
            "Communication is generally understandable despite frequent grammatical inconsistencies and sentence structure challenges",
            "Speech flow is often interrupted by excessive filler words and incomplete thoughts that require listener patience",
            "Would benefit from practicing smoother delivery and reducing hesitations to enhance professional presentation in client-facing roles"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:57:48.778Z"
      }
    },
    {
      "candidate_id": 14659,
      "candidate_name": "name",
      "evaluation": {
        "success": true,
        "data": {
          "name": "name",
          "overall_score": 50,
          "pronunciation_score": 65,
          "grammar_score": 40,
          "vocabulary_score": 50,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 45,
          "fluency_score": 45,
          "summary_points": [
            "Shows genuine enthusiasm for teaching mathematics and has relevant educational background in the subject area",
            "Demonstrates understanding of key teaching concepts like using activities and engaging students actively",
            "Speech flow is frequently interrupted with incomplete thoughts and fragmented sentence structures that impact clarity",
            "Grammar patterns and word order often make responses difficult to follow, affecting professional communication",
            "Would benefit from practicing complete sentence formation and organizing thoughts before speaking"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:58:01.357Z"
      }
    },
    {
      "candidate_id": 14557,
      "candidate_name": "Naresh Chockalingam ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Naresh Chockalingam ",
          "overall_score": 61,
          "pronunciation_score": 72,
          "grammar_score": 68,
          "vocabulary_score": 75,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 65,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates strong technical vocabulary and ability to explain complex mathematical concepts clearly, showing good subject matter expertise",
            "Shows genuine understanding of teaching principles, emphasizing fundamentals over memorization and connecting concepts across disciplines",
            "Communication is generally understandable with adequate grammar and pronunciation for professional interaction",
            "Frequent use of filler words and hesitations significantly disrupts speech flow and affects overall communication effectiveness",
            "Would benefit from practicing smoother delivery and reducing verbal pauses to enhance professional presentation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:58:10.910Z"
      }
    },
    {
      "candidate_id": 14732,
      "candidate_name": "Nikita N Kanbarkar",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Nikita N Kanbarkar",
          "overall_score": 48,
          "pronunciation_score": 55,
          "grammar_score": 40,
          "vocabulary_score": 50,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 45,
          "fluency_score": 45,
          "summary_points": [
            "Shows genuine enthusiasm for teaching and connecting with students from different backgrounds",
            "Demonstrates understanding of key teaching concepts like using real-life examples and conducting assessments",
            "Communication clarity needs significant improvement as many responses are difficult to follow and incomplete",
            "Grammar and sentence structure require substantial development to effectively convey teaching concepts",
            "Would benefit from practicing complete responses and organizing thoughts before speaking in professional settings"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:58:20.690Z"
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
          "pronunciation_score": 72,
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates solid mathematical expertise and genuine enthusiasm for teaching, with 11 years of relevant experience in both traditional and online education",
            "Shows good understanding of pedagogical concepts like using real-world examples, interactive questioning, and adapting to different learning speeds",
            "Communication is generally understandable with clear pronunciation, though frequent pauses and hesitations affect the flow of responses",
            "Would benefit from practicing smoother delivery and reducing filler words to enhance professional presentation",
            "Grammar patterns sometimes create awkward phrasing that requires listener attention, but meaning remains clear throughout"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:58:31.161Z"
      }
    },
    {
      "candidate_id": 14563,
      "candidate_name": "Prajwal Chikkagalagali",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Prajwal Chikkagalagali",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine passion for mathematics and teaching, with clear enthusiasm for helping students understand concepts",
            "Demonstrates good foundational knowledge of teaching principles like using quizzes, assignments, and real-world applications",
            "Communication is generally understandable despite frequent pauses and hesitations",
            "Heavy use of filler words and incomplete sentences significantly impacts speech flow and professional presentation",
            "Would benefit from practicing more structured responses and reducing verbal hesitations to improve overall clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:58:52.402Z"
      }
    },
    {
      "candidate_id": 14572,
      "candidate_name": "Pravalika Mashabattu",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Pravalika Mashabattu",
          "overall_score": 56,
          "pronunciation_score": 68,
          "grammar_score": 52,
          "vocabulary_score": 62,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 48,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates genuine passion for mathematics teaching and shows strong subject knowledge with personal achievements",
            "Communicates key ideas and teaching concepts clearly despite structural challenges",
            "Shows good understanding of student engagement techniques and practical teaching methods",
            "Sentence structure and grammar patterns sometimes create confusion and require listener effort to follow",
            "Would benefit from practicing more organized responses and smoother speech flow for professional communication"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:59:08.348Z"
      }
    },
    {
      "candidate_id": 14718,
      "candidate_name": "preeti Palni",
      "evaluation": {
        "success": true,
        "data": {
          "name": "preeti Palni",
          "overall_score": 58,
          "pronunciation_score": 75,
          "grammar_score": 62,
          "vocabulary_score": 70,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 60,
          "fluency_score": 68,
          "summary_points": [
            "Demonstrates strong subject matter expertise in mathematics teaching with clear passion for education and student-centered approaches",
            "Shows good conceptual understanding when explaining teaching methods and can provide relevant real-world examples to make math engaging",
            "Communication is generally understandable with adequate vocabulary for professional teaching contexts",
            "Grammar patterns and sentence structure occasionally affect clarity and would benefit from refinement for smoother professional communication",
            "Speech flow shows some hesitation and self-correction that could be improved through practice in structured interview settings"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:59:19.692Z"
      }
    },
    {
      "candidate_id": 14568,
      "candidate_name": "priya Bajaj",
      "evaluation": {
        "success": true,
        "data": {
          "name": "priya Bajaj",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates genuine passion for teaching and shows good understanding of mathematical concepts and pedagogical approaches",
            "Generally intelligible pronunciation allows for effective communication in a professional setting",
            "Shows ability to provide concrete examples and explain teaching methodologies clearly",
            "Speech flow could benefit from more preparation and practice to reduce frequent restarts and incomplete thoughts",
            "Grammar patterns and sentence structure occasionally impact clarity and would benefit from refinement"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:59:30.486Z"
      }
    },
    {
      "candidate_id": 14598,
      "candidate_name": "priyanka Agrawal",
      "evaluation": {
        "success": true,
        "data": {
          "name": "priyanka Agrawal",
          "overall_score": 59,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 70,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 65,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates genuine passion for mathematics education and shows strong understanding of teaching concepts through real-world applications",
            "Communicates core ideas effectively with good professional vocabulary and clear pronunciation that supports understanding",
            "Shows solid grasp of pedagogical approaches including interactive learning, assessment methods, and student engagement strategies",
            "Speech flow could benefit from reducing filler words and pauses that occasionally interrupt the natural rhythm of responses",
            "Sentence structure sometimes becomes complex or incomplete, though the intended meaning generally remains clear to listeners"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:59:41.171Z"
      }
    },
    {
      "candidate_id": 14662,
      "candidate_name": "rajeev ranjan",
      "evaluation": {
        "success": true,
        "data": {
          "name": "rajeev ranjan",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates solid teaching knowledge and genuine passion for education, with clear understanding of pedagogical concepts like using practical examples and student engagement",
            "Shows good vocabulary range for educational topics and can explain complex concepts like integration and fractions in accessible ways",
            "Communication is generally understandable despite frequent pauses and hesitations throughout responses",
            "Heavy reliance on filler words and frequent speech interruptions significantly impact the flow and professional delivery",
            "Would benefit from practicing smoother speech patterns and reducing hesitations to improve overall communication effectiveness"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T07:59:54.121Z"
      }
    },
    {
      "candidate_id": 14768,
      "candidate_name": "Ramanpreet Kaur",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Ramanpreet Kaur",
          "overall_score": 60,
          "pronunciation_score": 72,
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 55,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates genuine passion for mathematics education and shows clear understanding of teaching concepts like equivalent fractions and student assessment methods",
            "Communicates core ideas effectively despite structural challenges, with good pronunciation that supports overall comprehension",
            "Shows practical teaching experience through specific examples like helping students with trigonometry and adapting to different learning speeds",
            "Heavy use of filler words and frequent self-corrections significantly impact speech flow and professional presentation",
            "Sentence structure and grammar patterns need refinement to improve clarity and reduce listener effort in professional settings"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:00:04.770Z"
      }
    },
    {
      "candidate_id": 14677,
      "candidate_name": "Reshu Jain",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Reshu Jain",
          "overall_score": 56,
          "pronunciation_score": 68,
          "grammar_score": 52,
          "vocabulary_score": 58,
          "filler_words_score": 35,
          "mother_tongue_influence_score": 55,
          "fluency_score": 45,
          "summary_points": [
            "Demonstrates solid understanding of mathematical concepts and teaching principles, showing good subject matter knowledge",
            "Shows awareness of different learning styles and the importance of student engagement through activities and real-life examples",
            "Communication is significantly impacted by frequent hesitations, incomplete sentences, and excessive filler words that disrupt the flow of ideas",
            "Would benefit from practicing structured responses and reducing verbal fillers to improve professional communication clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:01:05.483Z"
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
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates solid mathematical knowledge and genuine passion for teaching, with clear understanding of pedagogical concepts like real-life examples and student engagement",
            "Shows good comprehension of questions and provides relevant responses about teaching methodologies and student assessment",
            "Communication is generally understandable with adequate vocabulary for expressing educational concepts",
            "Speech flow could benefit from more structured responses and reduced hesitation patterns",
            "Grammar and sentence construction sometimes affect clarity, particularly in longer explanations"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:01:25.831Z"
      }
    },
    {
      "candidate_id": 14587,
      "candidate_name": "seema",
      "evaluation": {
        "success": true,
        "data": {
          "name": "seema",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates genuine passion for mathematics teaching with 10 years of experience and shows understanding of student-centered approaches",
            "Communicates core ideas effectively and shows creativity in using games, activities, and real-world examples like pizza for fractions",
            "Speech flow is often interrupted by frequent pauses, fillers, and self-corrections that affect overall fluency",
            "Grammar patterns sometimes create confusion in meaning, particularly with sentence structure and word order",
            "Would benefit from practicing smoother delivery and reducing hesitation markers to enhance professional communication"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:01:36.064Z"
      }
    },
    {
      "candidate_id": 14748,
      "candidate_name": "Seema Kothari",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Seema Kothari",
          "overall_score": 61,
          "pronunciation_score": 75,
          "grammar_score": 68,
          "vocabulary_score": 70,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 65,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates strong subject matter expertise as a chartered accountant with extensive tutoring experience, showing genuine passion for teaching mathematics",
            "Provides practical teaching examples and shows understanding of student-centered learning approaches, such as using pizza analogies for fractions",
            "Speech is generally understandable with adequate vocabulary for professional communication in educational contexts",
            "Frequent use of filler words and hesitations significantly disrupts the flow of communication and may impact student engagement",
            "Sentence structure and organization could be improved to deliver clearer, more concise explanations in a teaching environment"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:01:47.924Z"
      }
    },
    {
      "candidate_id": 14542,
      "candidate_name": "shaik Chameli",
      "evaluation": {
        "success": true,
        "data": {
          "name": "shaik Chameli",
          "overall_score": 58,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 68,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates strong subject knowledge in mathematics and shows genuine enthusiasm for teaching and professional development",
            "Effectively uses real-world examples like pizza slices and cake baking to explain mathematical concepts, showing good pedagogical understanding",
            "Shows clear commitment to student-centered learning with strategies for active engagement and differentiated instruction",
            "Speech flow could be improved by reducing frequent pauses and filler words that sometimes interrupt the communication",
            "Sentence structure and organization of ideas would benefit from more planning to enhance clarity in professional discussions"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:01:59.834Z"
      }
    },
    {
      "candidate_id": 14630,
      "candidate_name": "Shalu Rajdev Popat",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Shalu Rajdev Popat",
          "overall_score": 56,
          "pronunciation_score": 65,
          "grammar_score": 52,
          "vocabulary_score": 58,
          "filler_words_score": 35,
          "mother_tongue_influence_score": 48,
          "fluency_score": 45,
          "summary_points": [
            "Demonstrates genuine passion for mathematics education and shows understanding of core teaching concepts like interactive learning and real-world applications",
            "Has extensive teaching experience across different levels and can explain mathematical concepts using practical examples like cake division for fractions",
            "Speech flow is significantly disrupted by frequent incomplete sentences, long pauses, and difficulty organizing thoughts coherently",
            "Heavy use of filler words and fragmented sentence structures makes following explanations challenging for listeners",
            "Would benefit from practicing structured responses and reducing verbal hesitations to improve professional communication clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:02:12.175Z"
      }
    },
    {
      "candidate_id": 14593,
      "candidate_name": "Sheyama",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Sheyama",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 55,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates genuine teaching experience and passion for education with clear understanding of student needs",
            "Shows good pronunciation and is generally understandable to international listeners",
            "Provides relevant examples like using pizza to teach fractions, showing practical teaching approach",
            "Heavy reliance on filler words significantly disrupts communication flow and professional presentation",
            "Would benefit from developing more complete responses and reducing hesitation patterns to improve overall clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:02:22.196Z"
      }
    },
    {
      "candidate_id": 14545,
      "candidate_name": "Suja Ayers",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Suja Ayers",
          "overall_score": 59,
          "pronunciation_score": 75,
          "grammar_score": 72,
          "vocabulary_score": 70,
          "filler_words_score": 60,
          "mother_tongue_influence_score": 70,
          "fluency_score": 68,
          "summary_points": [
            "Demonstrates strong professional experience and genuine passion for teaching, with clear ability to communicate complex ideas effectively",
            "Shows good vocabulary range and uses relevant examples to illustrate teaching concepts, making responses engaging and practical",
            "Communication is generally clear and understandable with adequate grammar for professional interaction",
            "Frequent use of filler words and occasional incomplete thoughts can interrupt the flow of communication",
            "Would benefit from practicing more concise responses and reducing hesitation patterns to enhance overall fluency"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:02:32.477Z"
      }
    },
    {
      "candidate_id": 14680,
      "candidate_name": "sumit dwivedi ",
      "evaluation": {
        "success": true,
        "data": {
          "name": "sumit dwivedi ",
          "overall_score": 54,
          "pronunciation_score": 72,
          "grammar_score": 52,
          "vocabulary_score": 60,
          "filler_words_score": 65,
          "mother_tongue_influence_score": 55,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine enthusiasm for teaching and demonstrates understanding of student-centered learning approaches",
            "Communicates core ideas effectively and provides relevant examples from teaching experience",
            "Uses appropriate educational terminology and shows familiarity with interactive teaching methods",
            "Grammar patterns and sentence structure sometimes affect clarity and professional flow",
            "Would benefit from practicing smoother delivery and more complete sentence formation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:02:43.425Z"
      }
    },
    {
      "candidate_id": 14604,
      "candidate_name": "sunanda Vudata",
      "evaluation": {
        "success": true,
        "data": {
          "name": "sunanda Vudata",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 60,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 55,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine enthusiasm for teaching and connecting with children, with clear passion for making math accessible through practical examples",
            "Demonstrates good conceptual understanding of teaching methods, such as using real-world objects like pizza and candies to explain fractions",
            "Speech is generally understandable with acceptable pronunciation for international communication",
            "Frequent use of filler words and incomplete sentences significantly disrupts the flow of communication",
            "Would benefit from practicing more structured responses and reducing hesitation patterns to improve professional presentation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:02:55.524Z"
      }
    },
    {
      "candidate_id": 14574,
      "candidate_name": "swetha chittoor",
      "evaluation": {
        "success": true,
        "data": {
          "name": "swetha chittoor",
          "overall_score": 59,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 45,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Demonstrates genuine passion for teaching and strong understanding of student-centered learning approaches",
            "Shows good conceptual knowledge of math education principles and real-world application methods",
            "Communication is generally understandable with clear pronunciation for international audiences",
            "Frequent use of filler words and incomplete sentence structures can disrupt the flow of explanations",
            "Would benefit from practicing more structured responses to improve professional communication clarity"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:03:20.681Z"
      }
    },
    {
      "candidate_id": 14592,
      "candidate_name": "venkata padmavathi g",
      "evaluation": {
        "success": true,
        "data": {
          "name": "venkata padmavathi g",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 62,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 58,
          "summary_points": [
            "Shows genuine passion for teaching and demonstrates understanding of key educational concepts like student interaction and concept-based learning",
            "Communicates core ideas effectively despite structural challenges, with clear pronunciation that supports comprehension",
            "Has relevant professional experience in both software development and teaching across different age groups and subjects",
            "Frequent use of filler words and incomplete sentence structures occasionally disrupts the flow of communication",
            "Would benefit from practicing more structured responses and reducing hesitation patterns to enhance professional presentation"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:03:31.662Z"
      }
    },
    {
      "candidate_id": 14584,
      "candidate_name": "Vignesh Narayanan",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vignesh Narayanan",
          "overall_score": 61,
          "pronunciation_score": 78,
          "grammar_score": 72,
          "vocabulary_score": 75,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 70,
          "fluency_score": 68,
          "summary_points": [
            "Demonstrates strong passion for teaching and connects well with personal experiences, showing genuine enthusiasm for education and student development",
            "Shows good vocabulary range and ability to explain complex concepts using relatable examples like chocolates for multiplication tables",
            "Communicates ideas clearly despite some structural awkwardness, with pronunciation that is generally easy to follow",
            "Heavy use of filler words like 'um', 'uh', and 'and um' creates noticeable disruption to speech flow and professional presentation",
            "Would benefit from practicing smoother transitions between ideas and reducing hesitation markers to enhance overall communication effectiveness"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:03:42.936Z"
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
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates genuine passion for teaching mathematics and shows good understanding of educational concepts like interactive learning and real-world examples",
            "Communicates core ideas effectively despite some structural challenges, with clear enthusiasm for student engagement",
            "Shows practical teaching experience with ability to adapt methods for different learning speeds and backgrounds",
            "Speech flow could benefit from better organization and reduced filler words to enhance professional delivery",
            "Sentence structure and grammar patterns occasionally impact clarity, though meaning generally remains understandable"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:03:53.337Z"
      }
    },
    {
      "candidate_id": 14679,
      "candidate_name": "Vishakha Gehlot",
      "evaluation": {
        "success": true,
        "data": {
          "name": "Vishakha Gehlot",
          "overall_score": 57,
          "pronunciation_score": 72,
          "grammar_score": 58,
          "vocabulary_score": 65,
          "filler_words_score": 55,
          "mother_tongue_influence_score": 60,
          "fluency_score": 62,
          "summary_points": [
            "Demonstrates strong professional background and genuine enthusiasm for teaching mathematics with clear passion for student engagement",
            "Shows good understanding of pedagogical concepts like connecting math to real-life scenarios and using interactive methods",
            "Communication is generally understandable with adequate vocabulary for expressing teaching ideas and concepts",
            "Speech flow could benefit from more structured responses and reduced use of filler words that sometimes interrupt the message",
            "Grammar patterns occasionally create unclear sentences that may require listener effort to follow the intended meaning"
          ]
        },
        "model": "claude",
        "timestamp": "2026-02-07T08:04:11.337Z"
      }
    }
  ]