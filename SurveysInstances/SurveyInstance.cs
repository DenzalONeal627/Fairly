using Sabio.Models.Domain.SurveyAnswers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Domain.SurveysInstances
{
    public class SurveyInstance : BaseSurveyInstance
    {
        public string SurveyName { get; set; }
        public LookUp SurveyStatus { get; set; }
        public List<InstanceSurveyQuestion> Questions { get; set; }
    }

}
