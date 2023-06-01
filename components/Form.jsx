import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text blue_gradient text-left p-4">
        <span className="blue_gradient">{type} Prompt Post</span>
      </h1>
      <p className="desc text-left max-w-md ">
        {type} and share to unleash your creativity and share your thoughts,
        ideas, and results from engaging with various AI models like Chat GPT,
        Midjourney, and more.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
      
        <label>
          <span className="font-satoshi font-semibold text-base form_input">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="write your prompt here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base form_input">
            Add your tag
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base form_input">
            Image url / prompt link
          </span>
          <input
            value={post.imgUrl}
            onChange={(e) => setPost({ ...post, imgUrl: e.target.value })}
            placeholder="http://image"
            required
            className="form_input"
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href="/" className="outline_btn">
          Cancel
        </Link>
        <button className='black_btn' type="submit" disabled={submitting}>
        Publish

        </button>

        </div>
      </form>
    </section>
  );
};

export default Form;
