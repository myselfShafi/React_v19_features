import type { JSX } from "react";
import addMetadata from "../features/addMetadata";
import HookDemo from "../features/useHookDemo";

interface V19Features {
    id: number,
    title: string;
    desc: string;
    element?: () => JSX.Element;
    demo?: string;
}

export const v19Features: V19Features[] = [
    {
        id: 1,
        title: '✅ React Compiler (Optimizing Compiler)',
        desc: 'Automatic improve App performace without manual memoization(memo or useCallback).'
    },
    {
        id: 2,
        title: '🪝 use() Hook',
        desc: 'Directly use promises or async data inside the component. Makes working with async data much simpler, especially for loading things from APIs.',
        element: HookDemo
    },
    {
        id: 3,
        title: '🧾 Form Actions (useFormStatus, useFormState)',
        desc: 'Manage form status like loading or errors without writing extra logic or state.'
    },
    {
        id: 4,
        title: '🌐 Document Metadata API',
        desc: ' Set the page title, meta tags, and viewport directly in your component using special tags like <DocumentTitle />',
        element: addMetadata
    },
    {
        id: 5,
        title: '🖥️ Server Components',
        desc: 'Components that run on server, not in the browser. Faster page loads and less JavaScript sent to the browser.'
    },
    {
        id: 6,
        title: '🎬 Streaming with Suspense',
        desc: 'Show a part of the page while it\'s still loading other parts. Faster user experience, especially for slow connections.'
    },
    {
        id: 7,
        title: '🧩 Ref as a Prop',
        desc: 'Pass a ref just like a normal prop to a component.'
    },
    {
        id: 8,
        title: '⚙️ Asset Hints (<Preload>, <Preconnect>)',
        desc: 'Tell the browser early which images, fonts, or files are needed. Speeds up loading by preloading important resources.'
    },
    {
        id: 9,
        title: '🧹 Improved useEffect Cleanup',
        desc: 'Easier to debug and write reliable effects(Cleanup functions).'
    }
]