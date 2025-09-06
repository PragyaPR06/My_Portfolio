import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const USERNAME = '_pragati12_';
const LEETCODE_API = `https://competeapi.vercel.app/user/leetcode/${USERNAME}`;
const LEETCODE_PROFILE_URL = `https://leetcode.com/${USERNAME}/`;

interface AcSubmissionNum {
  difficulty: string;
  count: number;
  submissions: number;
}

interface SubmitStats {
  acSubmissionNum: AcSubmissionNum[];
}

interface MatchedUser {
  submitStats: SubmitStats;
}

interface LeetCodeApiResponse {
  data: {
    matchedUser: MatchedUser;
  };
}

const ProblemSolved: React.FC = () => {
  const [totalSolved, setTotalSolved] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      setLoading(true);
      try {
        const res = await fetch(LEETCODE_API);
        const data: LeetCodeApiResponse = await res.json();

        const total = data.data.matchedUser.submitStats.acSubmissionNum.find(
          (item) => item.difficulty === 'All'
        )?.count ?? 0;

        setTotalSolved(total);
      } catch {
        setTotalSolved(0);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  const handleClick = () => {
    window.open(LEETCODE_PROFILE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Total Problems Solved</h2>
      <div
        style={{ ...styles.counterBox, cursor: 'pointer' }}
        onClick={handleClick}
        title="Go to LeetCode Profile"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        {loading ? (
          <span style={styles.loading}>Loading...</span>
        ) : (
          <CountUp end={totalSolved} duration={2} separator="," style={styles.count} />
        )}
      </div>
      <div style={styles.platforms}>
        <span style={styles.platform}>LeetCode</span>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 320,
    margin: '30px auto',
    padding: 20,
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 20,
    boxShadow:
      '0 4px 30px rgba(102, 126, 234, 0.5), 0 10px 70px rgba(118, 75, 162, 0.6)',
    color: '#fff',
    userSelect: 'none',
    transition: 'all 0.3s ease',
  },
  title: {
    margin: 0,
    marginBottom: 15,
    fontWeight: 700,
    fontSize: 24,
  },
  counterBox: {
    fontSize: 72,
    fontWeight: '900',
    lineHeight: 1,
    letterSpacing: '0.1em',
    transition: 'transform 0.2s ease',
  },
  count: {
    fontVariantNumeric: 'tabular-nums',
  },
  loading: {
    fontSize: 28,
    fontStyle: 'italic',
  },
  platforms: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 600,
    opacity: 0.85,
  },
  platform: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '6px 14px',
    borderRadius: 25,
  },
};

export default ProblemSolved;
