<script>
/*import options*/
import AppOptions from "./AppOptions.vue";

/*import courses*/
import AppCourses from "./AppCourses.vue";

/*import events*/
import AppEvents from "./AppEvents.vue";

/*import profile*/
import AppProfile from "./AppProfile.vue";

export default {
  data() {
    return {
      title: "",
    };
  },
  components: { AppOptions, AppCourses, AppEvents, AppProfile },
};
</script>

<template>
  <!--PRIMA SEZIONE-->
  <div class="bg-hazelnut">
    <div class="container">
      <div class="flex-horizontal justify-content-between pt-3">
        <div
          class="flex-vertical col-5 justify-content-center section-title-left"
        >
          <h2>Complete Your Dreams in JavaS Programming</h2>
          <p>
            Learn any coding program in distance and for a reasonable fee. You
            don't have to struggle alone, you've got our assistance and help.
          </p>
          <!--button verde(ripetuto)-->
          <button class="my-button w-50">
            <font-awesome-icon
              icon="fa-solid fa-download"
              style="color: #ffffff"
            />
            Download free E-book
          </button>
        </div>
        <!--box immagine-->
        <div>
          <img src="img/first-section-image.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!--SECONDA SEZIONE-->
  <div class="bg-vanilla">
    <div class="container">
      <div class="flex-horizontal flex-wrap justify-content-center">
        <!--titolo sezione-->
        <div class="section-title-center my-5">
          <span>START LEARNING CODING LANGUAGE</span>
          <h2>Build Your Dream <span class="green-data">Today</span></h2>
        </div>
        <!--cards option corsi-->
        <div class="flex-horizontal">
          <AppOptions></AppOptions>
        </div>
        <!--img + cards orizzontali-->
        <div
          class="flex-horizontal col-12 justify-content-between wrapper pt-3"
        >
          <!--box immagine-->
          <div>
            <img src="img/second-section-image-01.png" alt="" />
          </div>
          <div
            class="flex-vertical col-4 justify-content-center section-title-left"
          >
            <span>DREAM WITH MAXCOACH</span>
            <h2>
              Construct A <span class="green-data">Stunning</span> Career
              Perspective
            </h2>
            <div class="flex-horizontal justify-content-between label">
              <span>Multiple Platforms Supported for Teaching & Studying</span>
              <span
                ><font-awesome-icon
                  icon="fa-solid fa-circle-minus"
                  style="color: #ffffff"
              /></span>
            </div>
            <div class="white-bg-text">
              <p>
                MaxCoach supports the act of teaching and learning on multiple
                platforms like online or offline via material downloads. We know
                things aren't supposed to be devoured in a short time, you can
                always access our knowledge base from any device
              </p>
            </div>
            <div
              class="flex-horizontal justify-content-between white-bg-text mt-2"
            >
              <span>Multiple Course Participation at the Same Time</span>
              <span
                ><font-awesome-icon
                  icon="fa-solid fa-circle-plus"
                  style="color: #8c89a2"
              /></span>
            </div>
            <div
              class="flex-horizontal justify-content-between white-bg-text mt-2"
            >
              <span>Track Study Progress & Deliver Prompt Feedback</span>
              <span
                ><font-awesome-icon
                  icon="fa-solid fa-circle-plus"
                  style="color: #8c89a2"
              /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--TERZA SEZIONE-->
  <div class="bg-hazelnut">
    <div class="container">
      <div class="flex-horizontal justify-content-around py-4">
        <div class="flex-vertical text-center">
          <h4 class="green-data">1.926</h4>
          <span>FINISHED SESSIONS</span>
        </div>
        <div class="flex-vertical text-center">
          <h4 class="green-data">3.092+</h4>
          <span>ENROLLED LEARNERS</span>
        </div>
        <div class="flex-vertical text-center">
          <h4 class="green-data">200</h4>
          <span>ONLINE INSTRUCTORS</span>
        </div>
        <div class="flex-vertical text-center">
          <h4 class="green-data">100%</h4>
          <span>SATISFACTION RATE</span>
        </div>
      </div>
    </div>
  </div>

  <!--QUARTA SEZIONE-->
  <div class="bg-vanilla">
    <div class="container">
      <div class="flex-horizontal flex-wrap justify-content-center">
        <!--titolo sezione-->
        <div class="section-title-center my-5">
          <span>CHOOSE WHERE YOU'D LIKE TO BEGIN</span>
          <h2>Latest Featured <span class="green-data">Courses</span></h2>
        </div>
        <!--cards corsi-->
        <div class="flex-horizontal flex-wrap">
          <AppCourses></AppCourses>
        </div>
        <div class="w-25 text-center">
          <button class="my-button">
            View all courses
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--QUINTA SEZIONE-->
  <div class="container">
    <div class="flex-horizontal justify-content-between pt-3">
      <div
        class="flex-vertical col-5 justify-content-center section-title-left"
      >
        <span>WHY HESITATE TO REGISTER?</span>
        <h2>Learn At Your Own <span class="green-data">Pace</span></h2>
        <ul class="gray-data">
          <li>
            <font-awesome-icon
              icon="fa-solid fa-check"
              style="color: #20ad96"
            />
            Select & customize courses to your preferences
          </li>
          <li>
            <font-awesome-icon
              icon="fa-solid fa-check"
              style="color: #20ad96"
            />
            Change the tutor and make arrangements
          </li>
          <li>
            <font-awesome-icon
              icon="fa-solid fa-check"
              style="color: #20ad96"
            />
            Participate in events to join others
          </li>
          <li>
            <font-awesome-icon
              icon="fa-solid fa-check"
              style="color: #20ad96"
            />
            Get the desired certificate delivered at house
          </li>
        </ul>
        <!--button verde(ripetuto)-->
        <button class="my-button w-50">Get started for free</button>
      </div>
      <!--box immagine-->
      <div>
        <img src="img/fifth-section-image-01.png" alt="" />
      </div>
    </div>
    <div class="flex-horizontal justify-content-between pt-3">
      <!--box immagine-->
      <div>
        <img src="img/fifth-section-image-02.png" alt="" />
      </div>
      <div
        class="flex-vertical col-5 justify-content-center section-title-left"
      >
        <span>WHAT ARE YOU LOOKING FOR?</span>
        <h2>Learn on your <span class="green-data">mobile</span> anytime!</h2>
        <p>
          Save lessons for later and revise or write notes at any time and on
          multipledevices on your way. Never interfere with activities of
          enjoyment or other precious moments.
        </p>
        <!--button verde(ripetuto)-->
        <button class="my-button w-50">Download our app</button>
      </div>
    </div>
  </div>

  <!--SESTA SEZIONE-->
  <div class="container">
    <div class="flex-vertical align-items-center">
      <div class="section-title-center">
        <span>GET IN CONTACT NOW</span>
        <h2>Upcoming <span class="green-data">Events</span></h2>
      </div>
      <!--cards events-->
      <div class="flex-horizontal justify-content-center flex-wrap">
        <AppEvents></AppEvents>
      </div>
      <div>
        <span class="dark-gray-data">Excited about our event?</span
        ><a class="green-data mx-2" href="#"
          >View all events
          <font-awesome-icon icon="fa-solid fa-arrow-right-long"
        /></a>
      </div>
    </div>
  </div>

  <!--SETTIMA SEZIONE-->
  <div class="bg-vanilla">
    <div class="container">
      <div class="flex-vertical align-items-center">
        <div
          class="flex-vertical col-5 py-5 align-items-center section-title-center"
        >
          <span>PEOPLE ARE PRAISING MAXCOACH</span>
          <h2>What make they <span class="green-data">love us?</span></h2>
        </div>
        <div class="flex-horizontal py-5">
          <AppProfile></AppProfile>
        </div>
        <div class="mb-5">
          <!--pallini-->
          <span>....</span>
        </div>
        <div class="flex-vertical align-items-center section-title-center">
          <h5>
            Start today for getting
            <span class="green-data">Online Certification</span>
          </h5>
          <h2>You can be your own guiding star with our help!</h2>
          <!--button verde(ripetuto)-->
          <button class="my-button w-50">Get started now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white-bg-text {
  background-color: white;
  border: 1px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  p {
    margin: 1rem 0.5rem;
    color: hsl(250.59deg 10.43% 68.04%);
  }
}
</style>
