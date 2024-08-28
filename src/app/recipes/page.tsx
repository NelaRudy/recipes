import { Suspense } from "react";
import ListLoading from "./loading";
import Search from "./components/search";
import List from "./components/list";

// z async moze byc wykorzystywany tylko po stronie serwera 
export default function ListPage () {

    const searchParams = [];

    return (
        <>
            <div><Search /></div>
            <div>
                <div className="max-w-screen-xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                        <Suspense fallback={<ListLoading />}>
                            <List />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
};
