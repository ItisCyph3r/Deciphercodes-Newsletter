import FAQ from "@/components/faq";
import WaitListForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <div id="home">
      <section className="bg-main-black">
        <div className="flex-center flex-col w-full">
          <div className="inline-block w-full flex-center">
            <h1 className="text-main-white text-center text-[4rem] leading-[4.5rem] font-semibold">
              We are <span className="text-[#ff006e]">reinventing</span> <br /> the ticketing experience
            </h1>
          </div>
          <div className="inline-block w-full text-center max-w-2xl mt-5">
            <p className=" text-main-white/70 text-2xl font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores modi blanditiis quas minima. Neque qui quo libero perspiciatis magnam. Nisi, similique. Magni itaque quidem corporis. Minus enim impedit quidem dolorem?
            </p>
          </div>
          <WaitListForm />
        </div>
      </section>
      <section className="bg-main-white" id="about">
        <div className="flex-center flex-col w-full gap-12">
          <div className="flex items-start justify-between flex-col md:flex-row gap-10 w-full">
            <div className="w-full md:w-1/2 flex-start flex-col gap-6">
              <h1 className="title-text text-main-black">Create and Discover events</h1>
              <p className="body-text text-main-black/70">Craft beautiful experiences and explore a wide range of events.</p>
            </div>
            <div className="w-full md:w-1/2 h-full min-h-[20rem] bg-[#D9D9D9] rounded-[2.75rem]" />
          </div>

          <div className="flex items-start justify-between flex-col md:flex-row gap-10 w-full">
            <div className="w-full md:w-1/2 flex-start flex-col gap-6">
              <h1 className="title-text text-main-black">Communicate with Event Enthusiasts</h1>
              <p className="body-text text-main-black/70">Interact with people who share similar interests and create endless memories along the way.</p>
            </div>
            <div className="w-full md:w-1/2 h-full min-h-[20rem] bg-[#D9D9D9] rounded-[2.75rem]" />
          </div>

          <div className="flex items-start justify-between flex-col md:flex-row gap-10 w-full">
            <div className="w-full md:w-1/2 flex-start flex-col gap-6">
              <h1 className="title-text text-main-black">Locate events with ease</h1>
              <p className="body-text text-main-black/70">Can&apos;t find your way to the event? Let Connect safely guide you.</p>
            </div>
            <div className="w-full md:w-1/2 h-full min-h-[20rem] bg-[#D9D9D9] rounded-[2.75rem]" />
          </div>
        </div>
      </section>
      <section className="bg-main-white" id="contact">
        <div className="flex-between flex-col-reverse md:flex-row gap-8 w-full">
          <div className="flex-center h-full w-full md:w-1/2">
            <div className="w-full flex-start flex-col gap-14">
              <div className="flex-start flex-col gap-8">
                <h1 className="title-text">Contact us</h1>
                <p className="body-text text-main-black/70">
                  Looking for more information? Kindly reach out to us on the space provided below.
                </p>
              </div>
              <div className="w-full">
                <form action="" className="w-full flex items-stretch justify-center flex-col gap-8">
                  <label>
                    <input
                      title="name"
                      type="text"
                      name="Full Name"
                      placeholder="fullname"
                      className="w-full h-[3.75rem] bg-[#6600CC] bg-opacity-20 rounded-[2.9375rem] py-4 px-6"
                    />
                  </label>
                  <label>
                    <input
                      title="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full h-[3.75rem] bg-[#6600CC] bg-opacity-20 rounded-[2.9375rem] py-4 px-6"
                    />
                  </label>
                  <label>
                    <input
                      title="subject of message"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full h-[3.75rem] bg-[#6600CC] bg-opacity-20 rounded-[2.9375rem] py-4 px-6"
                    />
                  </label>
                  <label>
                    <textarea
                      title="message"
                      name="message"
                      className=" border-none outline-none text-base px-6 py-8 text-main-black/70 w-full h-48 bg-[#6600CC] bg-opacity-20 rounded-[2.9375rem]"
                    />
                  </label>
                  <button type="submit" className="rounded-[2.9375rem] w-full h-[6.125rem] px-9 py-5 sub-title-text bg-main-purple flex-center text-main-white">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex self-start w-full md:w-1/2 h-full min-h-[20rem] bg-[#D9D9D9] rounded-[2.75rem]" />
        </div>
      </section>
    </div>
  )
}
