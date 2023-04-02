import { useRouter } from "next/router";

import MyLayout from "./component/layout"
import Header from "./component/header"

export default function BlogPost() {
    const router = useRouter();
    const { postId }=router.query;

    return (
      <>
      <p>Hello this is {postId} </p>
      </>
    )
  }
  