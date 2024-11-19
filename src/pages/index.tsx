import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import ReadMe from "./readme.mdx";

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout title={siteConfig.title} description="Margrete 中文">
            <main>
                <ReadMe />
            </main>
        </Layout>
    );
}
