import React from "react";

export default function AboutPage() {
  return (
    <div className="px-6">
      <section className="wm-auto py-12">
        <h1 className="flex items-center justify-center gap-1.5 py-6 select-none">
          About
        </h1>
        <h3>What Is It?</h3>
        <p>
          Hence is a tool for creating and sharing equations. It is designed to
          be a simple and intuitive way to create equations and share them with
          others. You can create equations using LaTeX and share them with
          others by sending them a link. You can also use Hence to calculate the
          output of an equation by passing inputs to it.
        </p>
        <h3>Design</h3>
        <p>
          Hence is designed to be simple and easy to use. It is built with a
          focus on user experience and accessibility. The interface is clean and
          minimalistic, with a focus on the content. The design is responsive
          and works well on all devices.
        </p>
        <h3>Lastly...</h3>
        <p>
          Hence is a work in progress and is currently in beta. If you have any
          feedback or suggestions, please feel free to reach out to us at
          help@hence.app
        </p>
      </section>
    </div>
  );
}
