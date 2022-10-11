import React from 'react';

const Blog = () => {
    return (
        <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-700">
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-12 text-2xl">1.What is the purpose of react router-dom?</h3>
                    <p className="md:pl-0 md:col-span-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-12 text-2xl">2.How  does context api works in react ?</h3>
                    <p className="md:pl-0 md:col-span-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                </div>
                <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                    <h3 className="font-semibold md:col-span-12 text-2xl">3.How does useRef work in React ?</h3>
                    <p className="md:pl-0 md:col-span-12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                </div>
               
            </div>
        </div>
    </section>
    );
};

export default Blog;