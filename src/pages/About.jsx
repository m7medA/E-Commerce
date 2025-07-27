function About() {
  return (
    <section className="py-6">
      <div className="aboutUsImage h-64 sm:h-80 md:h-96 w-full flex flex-col items-center justify-around text-center">
        <div className="text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl pb-3">
            About for Bacola
          </h1>
          <p className="uppercase tracking-wider text-sm sm:text-base">
            We can do more for you
          </p>
        </div>
      </div>

      <div className="layout py-6 px-4 sm:px-6 flex flex-col gap-6 sm:gap-8 md:gap-10 relative">
        <p className="text-sm sm:text-base">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
        </p>

        <div className="w-full md:w-[95%] md:ml-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold w-full md:w-[50%] tracking-wider">
            Quisque erat urna, congue et libero in eleifend euismod velit.
          </h2>
          <p className="text-sm sm:text-base">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="w-full md:w-[40%] h-auto">
            <img src="/images/CEO.png" className="w-full h-auto" alt="CEO" />
          </div>

          <div className="w-full md:w-[56%] flex flex-col gap-4 sm:gap-6 md:gap-8">
            <p className="text-base sm:text-lg font-semibold pl-0 md:pl-4">
              Rachel Leonard - Bacola CEO
            </p>
            <h3 className="text-xl sm:text-2xl font-bold w-full md:w-[66%]">
              Duis convallis luctus pretium. Pellentesque habitant morbi
            </h3>
            <p className="pl-0 md:pl-4 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <p className="pl-0 md:pl-4 text-sm sm:text-base">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>
          </div>

          <p className="bg-white py-6 px-6 sm:py-7 sm:px-8 md:py-9 md:px-12 md:absolute md:bottom-30 md:left-50 text-sm sm:text-base">
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>

        <p className="text-sm sm:text-base">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
      </div>
    </section>
  );
}

export default About;
