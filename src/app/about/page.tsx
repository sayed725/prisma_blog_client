


const AboutPage = async() => {


 await new Promise((resolve)=> setTimeout(resolve,4000))

 throw new Error("Something went Wrong")


  return (
    <div>AboutPage</div>
  )
}

export default AboutPage
