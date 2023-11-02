"use client";
import Header from "../../../../components/Header";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const params = useSearchParams();
  const router = useRouter();
  const score = params.get("score");
  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <Header />
      <div className="p-8">
        <h2>Your Result is: {score || 0}</h2>
        <button
          className="mt-5"
          style={{
            backgroundColor: "var(--dark)",
            color: "var(--white)",
            width: "100%",
            maxWidth: 400,
            height: 55,
            borderRadius: 5,
          }}
          onClick={handleClick}
        >
          Go to Dashboard
        </button>
      </div>
    </>
  );
};

export default page;
