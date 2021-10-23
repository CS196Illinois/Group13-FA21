from distance import usefulFunctions
import random

class predator:
    def __intit__(self, species, Energy, energyToBreed, energyToRun, travelSpeed):
        self.species = species
        self.Energy = energy
        self.energyToBreed = energyToBreed
        self.energyToRun = energyToRun
        self.travelSpeed = travelSpeed
        litterSize = 3
        positionX = random.randint(canavsSizeX)
        positionY = random.randint(canavsSizeY)
        vision = 2

    def move(speed, time):
        distance = speed * time
        positionX += distance
        
    def run(speed , time):
        if (energy > 0):
            distance = speed *2 *time
            energy -= 1
            positionX += distance
        else:
            distance = move(speed, time)
            positionX += distance
        
    def energyUpdate(preyConsumed):
        energy += (preyConsumed*5)

