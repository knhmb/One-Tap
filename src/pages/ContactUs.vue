<template>
  <section class="contact-us">
    <base-container>
      <div class="card">
        <el-row :gutter="1">
          <el-col :sm="24" :md="10">
            <base-card>
              <h2>Contact us</h2>
            </base-card>
          </el-col>
          <el-col :sm="24" :md="14">
            <base-card>
              <p class="heading">Heading</p>

              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque et vulputate neque nec. Pulvinar sapien, volutpat
                semper tempus, tortor. Massa tellus enim, adipiscing eu
                scelerisque vel pellentesque. Iaculis varius faucibus purus sit.
                Scelerisque turpis aliquam lectus neque sed tempus suspendisse
                quam. Amet amet nunc malesuada sit. Dolor cursus arcu augue
                vestibulum viverra gravida sit euismod velit. Mi, laoreet est
                nunc nullam sed massa suspendisse in. Pharetra adipiscing sed
                bibendum lacus senectus. Ornare vel scelerisque quis facilisis
                faucibus egestas ullamcorper mauris. Odio tincidunt duis neque
                in pulvinar nec, turpis ac. Condimentum venenatis nunc ante
                elementum ipsum amet, malesuada vel quisque. Sit dolor, nisi
                velit vestibulum. Aliquet sit dui mattis porta mauris cursus
                sociis egestas molestie.
              </p>
              <p class="description">
                Odio sit enim pretium nibh facilisis risus aenean. Volutpat, nec
                purus enim velit nunc nullam. Proin quis habitasse turpis massa
                volutpat venenatis nisl. Cras ipsum sit vivamus etiam morbi
                vestibulum tristique. Urna, quis libero lacinia in arcu, morbi
                augue.
              </p>
              <p class="heading">Heading</p>

              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque et vulputate neque nec. Pulvinar sapien, volutpat
                semper tempus, tortor. Massa tellus enim, adipiscing eu
                scelerisque vel pellentesque. Iaculis varius faucibus purus sit.
                Scelerisque turpis aliquam lectus neque sed tempus suspendisse
                quam. Amet amet nunc malesuada sit. Dolor cursus arcu augue
                vestibulum viverra gravida sit euismod velit. Mi, laoreet est
                nunc nullam sed massa suspendisse in. Pharetra adipiscing sed
                bibendum lacus senectus. Ornare vel scelerisque quis facilisis
                faucibus egestas ullamcorper mauris. Odio tincidunt duis neque
                in pulvinar nec, turpis ac. Condimentum venenatis nunc ante
                elementum ipsum amet, malesuada vel quisque. Sit dolor, nisi
                velit vestibulum. Aliquet sit dui mattis porta mauris cursus
                sociis egestas molestie.
              </p>
              <p class="heading">Heading</p>

              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque et vulputate neque nec. Pulvinar sapien, volutpat
                semper tempus, tortor. Massa tellus enim, adipiscing eu
                scelerisque vel pellentesque. Iaculis varius faucibus purus sit.
                Scelerisque turpis aliquam lectus neque sed tempus suspendisse
                quam. Amet amet nunc malesuada sit. Dolor cursus arcu augue
                vestibulum viverra gravida sit euismod velit. Mi, laoreet est
                nunc nullam sed massa suspendisse in. Pharetra adipiscing sed
                bibendum lacus senectus. Ornare vel scelerisque quis facilisis
                faucibus egestas ullamcorper mauris. Odio tincidunt duis neque
                in pulvinar nec, turpis ac. Condimentum venenatis nunc ante
                elementum ipsum amet, malesuada vel quisque. Sit dolor, nisi
                velit vestibulum. Aliquet sit dui mattis porta mauris cursus
                sociis egestas molestie.
              </p>
            </base-card>
          </el-col>
        </el-row>
      </div>
    </base-container>
  </section>
</template>
  
  <style scoped>
.contact-us {
  background: #f3f3f5;
}

.contact-us .card {
  background: #262626;
  min-height: 100vh;
  padding: 1px;
}

/* .contact-us .card .el-row .el-col {
    padding: 4rem 2rem;
  } */

.contact-us .card .el-row .el-col:first-of-type .card {
  background: #d5f7e8;
  border-radius: 24px;
  padding: 4rem 2rem;
  height: 100%;
}

.contact-us .card .el-row .el-col:last-of-type .card {
  background: #fafafa;
  border-radius: 24px;
  padding: 4rem 2rem;
}

.contact-us .card h2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 64px;
  letter-spacing: -0.02em;
  color: #262626;
}

.contact-us .card p.heading {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #202226;
  margin-bottom: 1rem;
}

.contact-us .card p.description {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #202226;
  margin-bottom: 1.5rem;
}

@media screen and (max-width: 991px) {
  .contact-us .card h2 {
    font-size: 55px;
  }

  .contact-us .card .el-row .el-col:first-of-type .card {
    padding: 4rem 1rem;
  }

  .contact-us .card .el-row .el-col:last-of-type .card {
    padding: 4rem 1rem;
  }
}
</style>