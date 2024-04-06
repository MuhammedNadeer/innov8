'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { useEffect } from 'react';
import Cookies from "js-cookie"
import Confetti from '@/components/component/confetti';


export default function CandidateInstructionsCardBased() {
  const [activeMenu, setActiveMenu] = useState("rules");
  const [rule, setRules] = useState("")

  const teamname = Cookies.get("name")
  const secretcode = Cookies.get("code")

  useEffect(() => {
    setRules(secretcode || '')
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  

  const handleMenuClick = (menu: any) => {
    setActiveMenu(menu);
  };

  return (
    

    <><nav className="bg-gray-800 dark:bg-gray-900 flex">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-2">
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={()=>handleMenuClick("rules")} className="block py-2 px-3 md:p-0 text-white md:bg-transparent md:hover:text-blue-700 md:dark:text-blue-500" aria-current="page">Rules and Regulations</button>
            </li>
            <li>
              <button onClick={()=>handleMenuClick("problem")} className="block py-2 px-3 md:p-0 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Problem Statements</button>
            </li>
            <li>
              <button onClick={()=>handleMenuClick("final")} className="block py-2 px-3 md:p-0 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Form Submission</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Confetti />
    <div className="flex bg-gray-800 flex-col min-h-screen">
    
        {(activeMenu === "rules" && rule === "innov8-coet-24") && <><main
          className="flex-1 grid min-h-[600px] gap-6 px-4 text-base lg:gap-10 lg:px-6 xl:min-h-[800px]"
          style={{ marginTop: '70px' }}
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-50 tracking-tighter sm:text-5xl">Welcome {teamname}</h1>
              <p className="text-gray-100 ml-1 dark:text-gray-400">Please read the instructions carefully before proceeding.</p>
            </div>
            <div className="space-y-4">
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>General Instructions:</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-4 space-y-2">
                    <li>
                    The INNOV8 is scheduled from 9:00 AM to 4:00PM.
                    </li>
                    <li>Projects must be original creations developed during the hackathon event.</li>
                    <li>Projects will be evaluated by a panel of judges based on predetermined criteria, including presentation skills, communication skills, creativity, technical complexity and impact.</li>
                    <li>Maintain professionalism throughout the event, both in your conduct and in your presentations.</li>
                    <li>Ensure strict adherence to all deadlines throughout the duration of the event.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Idea Submission:</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>The problem statements and their descriptions will be accessible under the "Problem Statements" tab.</li>
                    <li>At 10:00 AM, the form for idea submission will be closed for all participants. Late submissions will not be considered,so make sure you submit your ideas on time.</li>
                    <li>The form will be available at the "Form Submission" tab.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Presentation Documents:</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>All presentation documents must be completed and uploaded by 1:30 PM. This includes  pitch deck, hosted vercel link and GitHub repository link.</li>
                    <li>You can find the form located at "Form Submission" tab.</li>
                    <li>Ensure that your team has all necessary documents ready and uploaded before the deadline.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Presentation Schedule:</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>Presentations for participants will commence promptly at 1:30 PM. Please ensure that your team is ready and prepared to present at this time.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </main><div className="mx-auto max-w-3xl mt-6">

            <div style={{ marginBottom: '100px' }}>
              <Button
                className='w-full bg-black text-white hover:bg-gray-900'
                onClick={() => handleMenuClick("problem")}
              >
                Next
              </Button>
            </div>
          </div></>}

          {(activeMenu === "rules" && rule === "innov8-coet-6") && <><main
          className="flex-1 grid min-h-[600px] gap-6 px-4 text-base lg:gap-10 lg:px-6 xl:min-h-[800px]"
          style={{ marginTop: '70px' }}
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-50 tracking-tighter sm:text-5xl">Welcome {teamname}</h1>
              <p className="text-gray-100 ml-1 dark:text-gray-400">Please read the instructions carefully before proceeding.</p>
            </div>
            <div className="space-y-4">
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>General Instructions:</div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-4 space-y-2">
                    <li>
                    The INNOV8 is scheduled from 9:00 AM to 4:00PM.
                    </li>
                    <li>Projects must be original creations developed during the hackathon event.</li>
                    <li>Projects will be evaluated by a panel of judges based on predetermined criteria, including presentation skills, communication skills, creativity, technical complexity and impact.</li>
                    <li>Maintain professionalism throughout the event, both in your conduct and in your presentations.</li>
                    <li>Ensure strict adherence to all deadlines throughout the duration of the event.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Idea Submission:</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>The problem statements and their descriptions will be accessible under the "Problem Statements" tab.</li>
                    <li>At 10:00 AM, the form for idea submission will be closed for all participants. Late submissions will not be considered,so make sure you submit your ideas on time.</li>
                    <li>The form will be available at the "Form Submission" tab.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Presentation Documents:</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>All presentation documents must be completed and uploaded by 2:30 PM. This includes  pitch deck, hosted vercel link and GitHub repository link.You can find the form located at the bottom of this page.</li>
                    <li>You can find the form located at "Form Submission" tab.</li>
                    <li>Ensure that your team has all necessary documents ready and uploaded before the deadline.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Presentation Schedule:</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>Presentations for participants will commence promptly at 2:30 PM. Please ensure that your team is ready and prepared to present at this time.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </main><div className="mx-auto max-w-3xl mt-6">

            <div style={{ marginBottom: '100px' }}>
              <Button
                className='w-full bg-black text-white hover:bg-gray-900'
                onClick={() => handleMenuClick("problem")}
              >
                Next
              </Button>
            </div>
          </div></>}

        {activeMenu==="problem"&&<><main
          className="flex-1 grid min-h-[600px] gap-6 px-4 text-base lg:gap-10 lg:px-6 xl:min-h-[800px]"
          style={{ marginTop: '70px' }}
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-50 tracking-tighter sm:text-5xl">Problem Statements</h1>
              <p className="text-gray-100 ml-1 dark:text-gray-400">Problem Statements are given below</p>
            </div>
            <div className="space-y-4">
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Problem Statement 1</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>The problem statements and their descriptions will be accessible under the "Problem Statements" tab.</li>
                    <li>At 10:00 AM, the form for idea submission will be closed for all participants. Late submissions will not be considered,so make sure you submit your ideas on time.</li>
                    <li>The form will be available at the "Form Submission" tab.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Problem Statement 2</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>All presentation documents must be completed and uploaded by 2:30 PM. This includes  pitch deck, hosted vercel link and GitHub repository link.You can find the form located at the bottom of this page.</li>
                    <li>You can find the form located at "Form Submission" tab.</li>
                    <li>Ensure that your team has all necessary documents ready and uploaded before the deadline.</li>
                  </ol>
                </CardContent>
              </Card>
              <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Open Track</div>
                </CardHeader>
                <CardContent>
                  <ol className="list-disc ml-4 space-y-2">
                    <li>All presentation documents must be completed and uploaded by 2:30 PM. This includes  pitch deck, hosted vercel link and GitHub repository link.You can find the form located at the bottom of this page.</li>
                    <li>You can find the form located at "Form Submission" tab.</li>
                    <li>Ensure that your team has all necessary documents ready and uploaded before the deadline.</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
          </main>
          <div className="flex mx-auto max-w-3xl mt-6">
            <div style={{ marginBottom: '100px' }}>
            <Button
                className='w-full bg-black text-white hover:bg-gray-900'
                onClick={() => handleMenuClick("rules")}
              >
                Previous
              </Button>
              </div>
              <div style={{ marginBottom: '100px' }}>
              <Button
                className='w-full ml-2 bg-black text-white hover:bg-gray-900'
                onClick={() => handleMenuClick("final")}
              >
                Next
              </Button>
            </div>
          </div></>
        }

        {(activeMenu==="final"&& rule === "innov8-coet-24") && <><main
          className="flex-1 grid min-h-[600px] gap-6 px-4 text-base lg:gap-10 lg:px-6 xl:min-h-[800px]"
          style={{ marginTop: '70px' }}
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-50 tracking-tighter sm:text-5xl">Form Submissions</h1>
              <p className="text-gray-100 ml-1 dark:text-gray-400">All your forms are shown below</p>
            </div>
            <div className="space-y-2">
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Idea Submission Form:</div>
                </CardHeader>
                <CardContent>
                  <ol className="ml-4 space-y-2">
                    <li>Click the button to fill Idea Submission Form</li>
                  </ol>
                  <a href="https://forms.gle/txEHzxvPDH9QvLRw5" target="_blank"><button className="ml-4 mt-2 bg-transparent hover:bg-gray-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to form</button></a>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-2">
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Final Submission Form:</div>
                </CardHeader>
                <CardContent>
                  <ol className="ml-4 space-y-2">
                    <li>Click the button to fill Idea Submission Form</li>
                  </ol>
                  <a href="https://forms.gle/gPEfYaCaQthbyjUF8" target="_blank"><button className="ml-4 mt-2 bg-transparent hover:bg-gray-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to form</button></a>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-6">
            <div style={{ marginBottom: '100px' }}>
              <Button
                className='w-full bg-black text-white hover:bg-gray-900'
                onClick={() => handleMenuClick("problem")}
              >
                Previous
              </Button>
            </div>
          </div>
        </main>
        </>}
        {(activeMenu==="final"&& rule === "innov8-coet-6") && <><main
          className="flex-1 grid min-h-[600px] gap-6 px-4 text-base lg:gap-10 lg:px-6 xl:min-h-[800px]"
          style={{ marginTop: '70px' }}
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-50 tracking-tighter sm:text-5xl">Form Submissions</h1>
              <p className="text-gray-100 ml-1 dark:text-gray-400">All your forms are shown below</p>
            </div>
            <div className="space-y-2">
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Idea Submission Form:</div>
                </CardHeader>
                <CardContent>
                  <ol className="ml-4 space-y-2">
                    <li>Click the button to fill Idea Submission Form</li>
                  </ol>
                  <a href="https://forms.gle/9oNQpJiBSyXY6o5Z8" target="_blank"><button className="ml-4 mt-2 bg-transparent hover:bg-gray-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to form</button></a>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-2">
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
                <CardHeader>
                  <div>Final Submission Form:</div>
                </CardHeader>
                <CardContent>
                  <ol className="ml-4 space-y-2">
                    <li>Click the button to fill Idea Submission Form</li>
                  </ol>
                  <a href="https://forms.gle/5H28YskkLdAYkirh6" target="_blank"><button className="ml-4 mt-2 bg-transparent hover:bg-gray-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to form</button></a>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-6">
            <div style={{ marginBottom: '100px' }}>
              <Button
                className='w-full bg-black text-white hover:bg-gray-900'
                onClick={() => handleMenuClick("problem")}
              >
                Previous
              </Button>
            </div>
          </div>
        </main>
        </>}
        
      </div></>
  );
}
