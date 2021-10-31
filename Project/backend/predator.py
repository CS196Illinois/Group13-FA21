from distance import utilFunctions
import random

class Predator:
    def __init__(self, species, Energy, energyToBreed, energyToRun, travelSpeed, canavsSizeX, canavsSizeY):
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
        energy -= 1
        
    def run(speed , time):
        if (energy > 0):
            distance = speed *2 *time
            energy -= 4
            positionX += distance
        else:
            distance = move(speed, time)
            positionX += distance
        
    def energyUpdate(preyConsumed):
        energy += (preyConsumed*5)

