from distance import usefulFunctions
import random

class prey:
    def __intit__(self, species, Energy, energyToBreed, energyToRun, runSpeed, canavsSizeX, canavsSizeY):
        self.species = species
        self.Energy = energy
        self.energyToBreed = energyToBreed
        self.energyToRun = energyToRun
        self.runSpeed = runSpeed
        litterSize = 24
        positionX = random.randint(canavsSizeX)
        positionY = random.randint(canavsSizeY)
        vision = 1

    def move(speed, time):
        distance = speed * time
        energy -= 1
        
    def run(speed , time):
        if (energy > 0):
            distance = speed *2 *time
            energy -= 3
        else:
            distance = move(speed, time)

    
    def energyUpdate(grassConsumed):
        energy += (grassConsumed*3)
    
    
    
    


        