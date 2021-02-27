import portfolio from '../resume/CalebDunaheeResume - Google Docs.pdf'

export default function Personal() {
  return(
    <div class="con-row-cont">
      <div class="row">
        <div class="col-sm">
          <main class="personal-box1">
            <content class="pbox1">
              <section class="headbox-1">
                <h1>Personal</h1>
              </section>
              <section class="ec-box">
                <p>email: dunahee10@gmail.com</p>
              </section>
              <section class="ec-box2">
                <p>cell number: 815-992-2370</p>
              </section>
            </content>
          </main>
        </div>
        <div class="col-sm">
          <main class="personal-box2">
            <content class="pbox2">
              <section class="headbox-2">
                <h1>Social</h1>
              </section>
              <section class="link-1">
                <a href="https://github.com/cdunahee36" class="G1">Github Profile</a>
                <a href="https://www.linkedin.com/in/caleb-dunahee-47b28316a/" class="L1">LinkedIn Profile</a>
                <a href={portfolio} class="R1">Resume PDF</a>
              </section>
            </content>
          </main>
        </div>
      </div>
    </div>
  )
}