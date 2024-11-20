import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import Documentation from "../components/documentaion.mdx"

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Margrete 中文">
      <main>
        <div style={{
          padding: "4rem",
        }}>
          <Documentation />
        </div>
      </main>
    </Layout>
  );
}
