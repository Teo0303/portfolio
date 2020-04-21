import React from "react";
import Layout from "../layout/default";
import PrimaryButton from "../components/ui-elements/primary-button";

export default () => (
  <div>
    <Layout>
      <div className='hero py-32 bg-dark text-white flex justify-center items-center '>
        <div className='container flex mx-auto '>
          <div className='wrapper w-3/4'>
            <p class='text-primary text-lg'>&lt; Hello I am /&gt;</p>
            <h1 className='text-5xl font-bold'>
              FRONT-END DEVELOPER<span class='text-primary'>.</span>
            </h1>
            <p className='text-2xl'>
              I design and code beautifully simple things, and I love what I do.
            </p>
            <div className='my-12'>
              <PrimaryButton>Download CV</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='projects'>
          <h1 class='text-5xl text-center font-bold uppercase text-dark my-12'>
            My recent projects
          </h1>
          <ul className='project-list'>
            <li className='bg-primary-dark text-white rounded-lg mb-12'>
              <div className='flex'>
                <div className='left w-1/2 p-12'>
                  <div className='logo mb-8'>
                    <img
                      src='https://sufitour.uz/img/logo.ddf427a3.svg'
                      alt=''
                    />
                  </div>
                  <h1 className='text-4xl leading-tight font-bold mb-8'>
                    SufiTour <br />
                    Group Travels accros Uzbekistan
                  </h1>
                  <p className='mb-8 text-lg w-3/4'>
                    Web-site for searching unique tours in Russia with ninety
                    seven local tour agencies focused on foreign tourists
                  </p>
                  <div className='text-lg'>
                    <p className='text-xl font-bold'>2019 - 2020</p>
                    <p>UX&UI Design, Full-stack Development, Maintenance</p>
                  </div>
                </div>
                <div className='right w-1/2 flex items-center justify-end'>
                  <img src='https://artsurf.pro/projects/bc-en.png' alt='' />
                </div>
              </div>
            </li>
            <div className='flex justify-center'>
              <PrimaryButton>View all projects</PrimaryButton>
            </div>
          </ul>
        </div>
      </div>
    </Layout>
  </div>
);
