import { Suspense, use } from "react";

const fetchImg = new Promise<string>(resolve => setTimeout(() => resolve("https://images.unsplash.com/photo-1746950862786-c13d07b85bff"), 5000));

function UseHookExample() {
  const imgUrl = use(fetchImg);
  return <img src={imgUrl} alt="random_img" className="rounded-lg shadow-md" />
};

const HookDemo = () => {
  return (
     <Suspense fallback={<p>Loading...</p>}>
      <UseHookExample />
    </Suspense>
  )
}

export default HookDemo;
