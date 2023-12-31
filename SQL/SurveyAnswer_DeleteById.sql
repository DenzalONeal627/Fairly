USE [Fairly]
GO
/****** Object:  StoredProcedure [dbo].[SurveyAnswers_DeleteById]    Script Date: 7/5/2023 2:55:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:	Mbuyamba,Joseph
-- Create date: 04/12/2023
-- Description: [dbo].[SurveyAnswers_DeleteById]
-- Code Reviewer:  Rayner Guio

-- MODIFIED BY:
-- MODIFIED DATE:
-- Code Reviewer:
-- Note:
-- =============================================

ALTER PROCEDURE [dbo].[SurveyAnswers_DeleteById]
		@Id int

AS

/**-----Test Code----


Declare @Id int = 69
Execute dbo.SurveyAnswers_DeleteById @Id


*/
BEGIN
  
    DELETE FROM [dbo].[SurveyAnswers]
    WHERE Id = @Id;

END