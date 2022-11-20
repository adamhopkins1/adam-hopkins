import React from "react";

function News() {
  return (
    <>
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800">
          <h2 class="text-3xl font-bold mb-12 text-center">Latest articles</h2>

          <div class="grid lg:grid-cols-3 gap-6">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              style="background-position: 50%;"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/051.jpg"
                class="w-full"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style="background-color: rgba(0, 0, 0, 0.4)"
                >
                  <div class="flex justify-start items-end h-full">
                    <div class="text-white m-6">
                      <h5 class="font-bold text-lg mb-3">I miss the sun</h5>
                      <p>
                        <small>
                          Published <u>13.01.2022</u> by Anna Maria Doe
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/044.jpg"
                class="w-full"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style="background-color: rgba(0, 0, 0, 0.4)"
                >
                  <div class="flex justify-start items-end h-full">
                    <div class="text-white m-6">
                      <h5 class="font-bold text-lg mb-3">
                        Adventure in the desert
                      </h5>
                      <p>
                        <small>
                          Published <u>12.01.2022</u> by Mark Equel
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/045.jpg"
                class="w-full"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style="background-color: rgba(0, 0, 0, 0.4)"
                >
                  <div class="flex justify-start items-end h-full">
                    <div class="text-white m-6">
                      <h5 class="font-bold text-lg mb-3">Lonely mountain</h5>
                      <p>
                        <small>
                          Published <u>10.01.2022</u> by Bilbo baggins
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/047.jpg"
                class="w-full"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style="background-color: rgba(0, 0, 0, 0.4)"
                >
                  <div class="flex justify-start items-end h-full">
                    <div class="text-white m-6">
                      <h5 class="font-bold text-lg mb-3">Let's go!</h5>
                      <p>
                        <small>
                          Published <u>09.01.2022</u> by Halley Frank
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/028.jpg"
                class="w-full"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style="background-color: rgba(0, 0, 0, 0.4)"
                >
                  <div class="flex justify-start items-end h-full">
                    <div class="text-white m-6">
                      <h5 class="font-bold text-lg mb-3">
                        A hut in the mountains
                      </h5>
                      <p>
                        <small>
                          Published <u>07.01.2022</u> by David Beak
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div
              class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/049.jpg"
                class="w-full"
              />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  style="background-color: rgba(0, 0, 0, 0.4)"
                >
                  <div class="flex justify-start items-end h-full">
                    <div class="text-white m-6">
                      <h5 class="font-bold text-lg mb-3">
                        Beautiful waterfall
                      </h5>
                      <p>
                        <small>
                          Published <u>04.01.2022</u> by Joe Svan
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
