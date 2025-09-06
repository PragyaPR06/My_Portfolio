import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const USERNAME = '_pragati12_';
const LEETCODE_API = `https://competeapi.vercel.app/user/leetcode/${USERNAME}`;
const LEETCODE_PROFILE_URL = `https://leetcode.com/${USERNAME}/`;

const ProblemSolved: React.FC = () => {
  const [totalSolved, setTotalSolved] = useState(0);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      setLoading(true);
      try {
        const res = await fetch(LEETCODE_API);
        const data = await res.json();

        const total = data.data.matchedUser.submitStats.acSubmissionNum.find(
          (item: any) => item.difficulty === 'All'
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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 480;

  const styles = {
    container: {
      maxWidth: isMobile ? '90%' : 320,
      margin: '30px auto',
      padding: isMobile ? 10 : 20,
      textAlign: 'center' as const,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 20,
      boxShadow: '0 4px 30px rgba(102,126,234,0.5), 0 10px 70px rgba(118,75,162,0.6)',
      color: '#fff',
      userSelect: 'none' as const,
      transition: 'all 0.3s ease',
      marginTop:'20rem'
    },
    title: {
      margin: 0,
      marginBottom: 15,
      fontWeight: 700,
      fontSize: isMobile ? 20 : 24,
    },
    counterBox: {
      fontSize: 'clamp(28px, 5vw, 48px)',
      fontWeight: '900' as const,
      lineHeight: 1,
      letterSpacing: '0.1em',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
    },
    count: {
      fontVariantNumeric: 'tabular-nums' as const,
    },
    loading: {
      fontSize: isMobile ? 20 : 28,
      fontStyle: 'italic',
    },
    platforms: {
      marginTop: 15,
      fontSize: isMobile ? 14 : 16,
      fontWeight: 600,
      opacity: 0.85,
    },
    platform: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      padding: isMobile ? '4px 10px' : '6px 14px',
      borderRadius: 25,
    },
  };

  const handleClick = () => {
    window.open(LEETCODE_PROFILE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Total Problems Solved</h2>
      <div
        style={styles.counterBox}
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

export default ProblemSolved;
