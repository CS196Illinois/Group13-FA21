from program import Program
from predator import Predator
from prey import Prey

class SetUP:
    playerOne = Predator("Lion", 100, 3, 6, 2, 20, 20)
    turn = 5
    step = 1
    playerTwo = Prey("Rabbit", 200, 3, 6, 1, 20, 20)
    onePopulation = 7
    twoPopulation = 10
    program = Program(playerOne, playerTwo, onePopulation, twoPopulation)
    allpredators = []
    allpreys = []
    
        

    def predatorPosition(self):
        for i in range(self.program.predatorPopulation): 
            q = Predator("Lion", 200, 3, 6, 1, 20, 20)
            self.allpredators.append(q)
            


        # positionDict = {}
        # keys = []
        # for t in range(self.turn):
        #     perm = []
        #     for i in range(len(self.allpredators)):
        #         keys.append(i)
        #         self.allpredators[i].move(self.allpredators[i].runSpeed, self.step)
        #         temp = [i, [self.allpredators[i].positionX, self.allpredators[i].positionY]]
        #         perm.append(temp)
        #     positionDict[t] = perm
        
        positionDict = {}

        for t in range(self.turn):
            perm= []
            for i in range(len(self.allpredators)):
                self.allpredators[i].move(self.allpredators[i].runSpeed, self.step)
                temp = {"type": "predator", 
                        "position": {"x": self.allpredators[i].positionX, "y": self.allpredators[i].positionY}}
                perm.append(temp)
            positionDict[t] = perm

                



        return positionDict


        

    def preyPosition(self):

        for i in range(self.program.preyPopulation): 
            p = Prey("Rabbit", 200, 3, 6, 1, 20, 20)
            self.allpreys.append(p)
            


        # positionDict = {}
        # keys = []
        # for t in range(self.turn):
        #     perm = []
        #     for i in range(len(self.allpreys)):
                
        #         keys.append(i)
        #         self.allpreys[i].move(self.allpreys[i].runSpeed, self.step)
        #         temp = [i, [self.allpreys[i].positionX, self.allpreys[i].positionY]]
        #         perm.append(temp)
        #     positionDict[t] = perm

        positionDict = {}

        for t in range(self.turn):
            perm= []
            for i in range(len(self.allpreys)):
                self.allpreys[i].move(self.allpreys[i].runSpeed, self.step)
                temp = {"type": "prey", 
                        "position": {"x": self.allpreys[i].positionX, "y": self.allpreys[i].positionY}}
                perm.append(temp)
            positionDict[t] = perm
        



        return positionDict




#Predator
            #     print(self.program)
    #     for i in range(self.program.predatorPopulation): 
    #         self.allpredators.append(self.program.predator)
        
    #     #size = 0;
    #     keys = []
    #     final = {}
    #     perm = []
    #     for t in range(self.turn):
    #         keys.append(t)
    #         for i in range(len(self.allpredators)):
    #             self.allpredators[i].move(self.allpredators[i].travelSpeed, self.step)
    #             positionFinal = [self.allpredators[i].positionX, self.allpredators[i].positionY]
    #             temp = []
                
    #             perm.append(temp)

    #     #for i in range(len(self.allpredators)):
    #         #keys.append(i)
    #         #for t in range(self.turn):
    #             #self.allpredators[i].move(self.allpredators[i].travelSpeed, self.step)
    #             #positionFinal = (self.allpredators[i].positionX, self.allpredators[i].positionY)
    #             #temp = (t, positionFinal) 
    #             #perm.append(temp)
            
    #         #final[keys[i]] = perm


    #     #for i in range(len(allpredators)):
    #         #keys.append(i);

    #     #for i in range(len(allpredators)):
    #         #final[Keys[i]] = perm[i]   
    #     return final

## Prey 
                
                

            
            
        #size = 0;
        # keys = []
        # final = {}
        # perm = []
        # for i in range(len(self.allpreys)):
        #     keys.append(i)
        #     for t in range(self.turn):
        #         self.allpreys[i].move(self.allpreys[i].travelSpeed, self.step)
        #         positionFinal = (self.allpreys[i].positionX, self.allpreys[i].positionY)
        #         temp = (t, positionFinal) 
        #         perm.append(temp)
            
        #     final[keys[i]] = perm


        #for i in range(len(allpredators)):
            #keys.append(i);

        #for i in range(len(allpredators)):
            #final[Keys[i]] = perm[i]   