import Layout from '@/components/Layout'
import PorjectCard from '@/components/PorjectCard'
import ArrowLeft from '@/components/icons/ArrowLeftIcon'
import { getAllProjects } from '@/functions/getAllProjects'
import Link from 'next/link'
import React from 'react'

const ProjectsPage = ({projects}) => {
console.log(projects)
  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
        <section className='h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16'>

            <Link href="/">
                <ArrowLeft className="w-8 h-8 fill-current space-x-4"/>
                <span>Back to Home</span>
            </Link>

        {/* Projects */}
        <div className='grid grid-cols-1 mt-8 gap-6 md:gap-8 md:grid-cols-2'>
            {projects.map((project) => (<PorjectCard project={project}/>))}
        </div>
        </section>
    </Layout>
  )
}
export const getStaticProps = async () => {
    const projects = await getAllProjects();
    return{
      props: {
        projects
      },
    }
}


export default ProjectsPage