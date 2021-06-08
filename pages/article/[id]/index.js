import { Fragment } from "react";
import Link from "next/Link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

// import { useRouter } from "next/router";
const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <Fragment>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href='/'>&larr; Go Back</Link>
    </Fragment>
  );
};

//fetch data at every request (getServerSideProps)
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false //return 404 if not exist
  };
};

export default article;
