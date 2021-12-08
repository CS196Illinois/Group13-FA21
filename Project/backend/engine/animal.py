from test import Program
from predator import Predator
from prey import Prey

class SetUP:
    playerOne = Predator("Lion", 100, 3, 6, 2, 20, 20)
    turn = 10
    step = 1
    playerTwo = Prey("Rabbit", 200, 3, 6, 1, 20, 20)
    onePopulation = 3
    twoPopulation = 5;
    program = Program(playerOne, playerTwo, onePopulation, twoPopulation)
    allpredators = []
    allpreys = []
    
        

    def predatorPosition(self):
        print(self.program)
        for i in range(self.program.predatorPopulation): 
            self.allpredators.append(self.program.predator)
        
        #size = 0;
        keys = []
        final = {}
        perm = []
        for i in range(len(self.allpredators)):
            keys.append(i)
            for t in range(self.turn):
                self.allpredators[i].move(self.allpredators[i].travelSpeed, self.step)
                positionFinal = (self.allpredators[i].positionX, self.allpredators[i].positionY)
                temp = (t, positionFinal) 
                perm.append(temp)
            
            final[keys[i]] = perm

        #for i in range(len(allpredators)):
            #keys.append(i);

        #for i in range(len(allpredators)):
            #final[Keys[i]] = perm[i]   

        return final

