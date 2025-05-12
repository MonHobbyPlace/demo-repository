import { Request, Response } from "express";
import prisma from "../../prismaClient";

export const getCurrentUser = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    const userId = Number(id);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        PetPost: true,
        ServicePost: true,
        LikedPost: {
          select: {
            userId: true,
            hospital: true,
          },
        },
        conversations: {
          include: {
            conversation: {
              include: {
                messages: {
                  include: {
                    sender: true,
                    receiver: true,
                  },
                },
                participants: {
                  select: {
                    userId: true,
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Filter out the current user's ID from participants
    const updatedConversations = user?.conversations.map((conv) => {
      const otherParticipants = conv.conversation.participants.filter(
        (p) => p.userId !== userId
      );
      return {
        ...conv,
        conversation: {
          ...conv.conversation,
          participants: otherParticipants,
        },
      };
    });

    const userWithFilteredConversations = {
      ...user,
      conversations: updatedConversations,
    };

    res.status(200).json(userWithFilteredConversations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
