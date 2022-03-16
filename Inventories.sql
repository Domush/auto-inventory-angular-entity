USE [InventoryDB]
GO

/****** Object:  Table [dbo].[Inventories]    Script Date: 3/16/2022 2:08:46 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Inventories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Status] [nvarchar](20) NOT NULL,
	[Comments] [nvarchar](200) NOT NULL,
	[Added] [datetime2](7) NOT NULL,
	[Updated] [datetime2](7) NOT NULL,
	[CarModelId] [int] NOT NULL,
 CONSTRAINT [PK_Inventories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

