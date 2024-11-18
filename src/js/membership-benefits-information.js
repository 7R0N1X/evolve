import imgMobile1 from "../../public/member benefits/1-mobile.avif"
import imgDesktop1 from "../../public/member benefits/1-desktop.avif"
import imgMobile2 from "../../public/member benefits/2-mobile.avif"
import imgDesktop2 from "../../public/member benefits/2-desktop.avif"

export const information = [
  {
    imagen: [{
      mobile: imgMobile1,
      desktop: imgDesktop1
    }],
    imgPosition: "lg:justify-start",
    descriptionPosition: "lg:right-0",
    title: "Member focused",
    description: "At EVOLVE we are dedicated to putting our members first by tailoring our services to meet their individual needs. From personalised training programs to attentive staff members ready to assist at all times, we strive to create a welcoming and supportive environment where members feel valued and motivated to achieve their fitness goals.",
    data_aos: "fade-right",
    data_aos_delay:"200"
  },
  {
    imagen: [{
      mobile: imgMobile2,
      desktop: imgDesktop2
    }],
    imgPosition: "lg:justify-end",
    descriptionPosition: "lg:left-0",
    title: "Tailored programming",
    description: "Let's work together to create a comprehensive plan that seamlessly accommodates your family commitments, manages and heals from injuries, and overcomes career obstacles. Regardless of life's challenges, we will navigate a path towards your goals, making the journey as smooth as possible despite the twists and turns along the way.",
    data_aos:"fade-left",
    data_aos_delay:"200"
  }
]