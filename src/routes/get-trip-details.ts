import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { ClientError } from '../errors/client-errors'


export async function getTripsDetails(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/trips/:tripId',
    {
      schema: {
        params: z.object({
          tripId: z.string().uuid(),
        }),
      },
    },
    async (request) => {

        const {tripId} = request.params
     


        const trip = await prisma.trip.findUnique({
         where:{
             id:tripId
         },
         select:{
            id:true,
            destination:true,
            is_confirmed:true,
            starts_at:true,
            ends_at:true
         }
        })
 
        if(!trip) throw new ClientError("Trip not found")
 
     
 
         
 
             return {
                trip
             }
    },
  )
}