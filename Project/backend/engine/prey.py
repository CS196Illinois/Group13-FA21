from distance import UtilFunctions
import random

class Prey:
    def __init__(self, species, Energy, energyToBreed, energyToRun, runSpeed, canavsSizeX, canavsSizeY):
        self.species = species
        self.energy = Energy
        self.energyToBreed = energyToBreed
        self.energyToRun = energyToRun
        self.runSpeed = runSpeed
        litterSize = 24
        positionX = random.randint(0,canavsSizeX)
        positionY = random.randint(0,canavsSizeY)
        vision = 1

    def move(speed, time):
        distance = speed * time
        positionX += distance
        energy -= 1
        
    def run(speed , time):
        if (energy > 0):
            distance = speed *2 *time
            positionX += distance
            energy -= 3
        else:
            distance = move(speed, time)
            positionX += distance

    
    def energyUpdate(grassConsumed):
        energy += (grassConsumed*3)
    
