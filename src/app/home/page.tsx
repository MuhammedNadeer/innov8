'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';


export default function CandidateInstructionsCardBased() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex bg-gray-800 flex-col min-h-screen">
      <main
        className="flex-1 grid min-h-[600px] gap-6 px-4 text-base lg:gap-10 lg:px-6 xl:min-h-[800px]"
        style={{ marginTop: '70px' }}
      >
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-50 tracking-tighter sm:text-5xl">Welcome to your Interview</h1>
            <p className="text-gray-100 ml-1 dark:text-gray-400">Please read the instructions carefully before proceeding.</p>
          </div>
          <div className="space-y-4">
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
              <CardHeader>
                <div>Round 1 - Big Five Traits Analysis</div>
                <div>Personality Traits Analysis</div>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    You will be presented with a series of statements. For each statement, you need to indicate the degree
                    to which it applies to you.
                  </li>
                  <li>There are no right or wrong answers. Please respond honestly based on your own feelings and experiences.</li>
                  <li>You will have 10 minutes to complete this round. Once you start, you cannot pause or return to previous questions.</li>
                </ol>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
              <CardHeader>
                <div>Round 2 - Video Recording Session</div>
                <div>Video Recording Session</div>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>You will be asked a series of questions. After each question, you will have 30 seconds to prepare your response.</li>
                  <li>Once the recording starts, you will have 2 minutes to provide your answer. Please ensure you are in a quiet environment and clearly visible in the video.</li>
                  <li>You will not be able to re-record your answers. Please answer each question to the best of your ability.</li>
                </ol>
              </CardContent>
            </Card>
            <Card style={{ backgroundColor: '#1B1B1B', color: 'white', borderColor: 'rgba(0, 0, 0, 0.2)' }}>
              <CardHeader>
                <div>Round 3 - Skills Assessment (MCQ)</div>
                <div>Skills Assessment (MCQ)</div>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>You will be presented with a series of multiple-choice questions related to the skills required for the position.</li>
                  <li>Please read each question carefully and select the most appropriate answer.</li>
                  <li>You will have 20 minutes to complete this round. Once you start, you cannot pause or return to previous questions.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <div className="mx-auto max-w-3xl mt-6">
        <div className="flex items-center mb-6" style={{ marginTop: '30px' }}>
          <Checkbox
            style={{ borderColor: 'black', marginRight: '10px' }}
            id="acknowledgment"
            checked={isChecked}
            onCheckedChange={setIsChecked}
          />
          <p className="text-sm text-gray-200 dark:text-black-300">I acknowledge and agree to the instructions</p>
        </div>
        <div style={{ marginBottom: '100px' }}>
          <Button
            className={`w-full ${isChecked ? 'bg-black text-white hover:bg-gray-900' : 'bg-gray-400 text-white cursor-not-allowed'}`}
            disabled={!isChecked}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
