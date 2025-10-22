import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsPage: React.FC = () => {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [showSheet, setShowSheet] = useState(true);

  const handleNext = () => {
    if (isAgreed) {
      setShowSheet(false);
      navigate("/role");
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 배경 오버레이 */}
      {showSheet && (
        <div
          onClick={() => setShowSheet(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            opacity: showSheet ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* 약관 동의 Bottom Sheet */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: showSheet
            ? "translate(-50%, 0%)"
            : "translate(-50%, 100%)",
          transition: "transform 0.4s ease",
          width: "100%",
          maxWidth: 375,
          background: "white",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          boxShadow: "0 -2px 12px rgba(0,0,0,0.15)",
          padding: 24,
        }}
      >
        {/* 상단 바 */}
        <div
          style={{
            width: 40,
            height: 4,
            background: "#ccc",
            borderRadius: 2,
            margin: "0 auto 16px",
          }}
        />

        <h3
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: 600,
            color: "#4A4A4A",
            lineHeight: "26px",
            marginBottom: 16,
          }}
        >
          원활한 서비스 제공을 위해 <br />
          약관 동의가 필요합니다
        </h3>

        {/* 모두 동의 */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1.5px solid #D9D9D9",
            borderRadius: 8,
            padding: 12,
            marginBottom: 12,
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <span style={{ fontWeight: 500, fontSize: 16 }}>모두 동의합니다</span>
        </label>

        {/* 약관 리스트 */}
        <ul
          style={{
            listStyle: "none",
            paddingLeft: 8,
            margin: 0,
            fontSize: 14,
            color: "#868686",
            lineHeight: "22px",
          }}
        >
          <li>✔ (필수) 만 14세 이상</li>
          <li>✔ (필수) 개인정보 수집 및 이용 동의</li>
          <li>✔ (필수) 서비스 이용약관 동의</li>
          <li>✔ (선택) 광고성 정보 수신 동의</li>
        </ul>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={!isAgreed}
          style={{
            marginTop: 20,
            width: "100%",
            height: 52,
            borderRadius: 6,
            border: "none",
            fontWeight: 600,
            color: "white",
            backgroundColor: !isAgreed
              ? "#D9D9D9"
              : hovered
              ? "#0077E6"
              : "#0088FF",
            cursor: isAgreed ? "pointer" : "not-allowed",
            transition: "background-color 0.2s ease",
          }}
        >
          다음
        </button>

        {/* 하단 바 */}
        <div
          style={{
            width: 134,
            height: 5,
            borderRadius: 100,
            background: "#0F0F10",
            margin: "24px auto 0",
          }}
        />
      </div>
    </div>
  );
};

export default TermsPage;
