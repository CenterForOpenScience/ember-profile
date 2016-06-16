import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let wiki = "<div><h2><a></a>Estimating the Reproducibility of Psychological Science</h2><p><strong>Open Science Collaboration</strong></p><p><strong>Abstract:</strong>Reproducibility is a defining feature of science, but the extent to which it characterizes current research is unknown. We conducted replications of 100 experimental and correlational studies published in three psychology journals using high-powered designs and original materials when available. Replication effects (Mr = .197, SD = .257) were half the magnitude of original effects (Mr = .403, SD = .188), representing a substantial decline. Ninety-seven percent of original studies had significant results (p &lt; .05). Thirty-six percent of replications had significant results; 47% of original effect sizes were in the 95% confidence interval of the replication effect size; 39% of effects were subjectively rated to have replicated the original result; and, if no bias in original results is assumed, combining original and replication results left 68% with significant effects. Correlational tests suggest that replication success was better predicted by the strength of original evidence than by characteristics of the original and replication teams.</p><p><strong>Citation:</strong>Open Science Collaboration. (2015).  <a>Estimating the reproducibility of psychological science</a>.  <em>Science, 349</em>(6251), aac4716. Doi: 10.1126/science.aac4716</p><h3><a></a>Contents</h3>  <p><a>Summary Report</a>: Read the <a><em>Science</em> article</a> and supplementary material summarizing the results of the Reproducibility Project: Psychology. Or, read the <a>Green OA version with supplementary information</a> in the same file.</p><p><a>Supplement only.</a> Supplementary materials to \"Estimating the Reproducibility of Psychological Science.\" Includes additional graphs and details on analyses.</p><p><a>Replicated Studies</a>: Explore the preregistrations, materials, data, and result reports of the individual replication projects.</p><p><a>Guide to Analyses</a>: Reproduce the analyses of the individual projects and the aggregate results.</p><p><a>RPP Process</a>: Learn more about the design, management, and operation of this large-scale crowdsourced project.</p><p><a>Presentations</a>: Find articles, slides, notes, and videos of presentations of the Reproducibility Project: Psychology and related efforts.</p><h3><a></a>Comments</h3>  <p><a>Technical Comment by Gilbert et al. (2016)</a>: Read the technical comment written by Gilbert, King, Pettigrew, and Wilson on the Reproducibility Project: Psychology.</p><p><a>Response to Gilbert et al. (2016)</a>: Read the response to Gilbert et al.'s technical comment, written by members of the Open Science Collaboration.</p><p><a>Replicated Studies mentioned in Gilbert et al. (2016)</a>: Explore the final reports and data for individual replications mentioned in Gilbert et al.'s technical comment.</p><p><a>All Comments</a>: Read additional comments on the publication and responses made by members of the Open Science Collaboration.</p><h3><a></a>Additional Resources</h3><p><a>Center for Open Science</a>: Learn more about the organization that facilitated the project and its initiatives to increase the transparency and reproducibility of research.</p><p><a>Open Science Framework</a>: Learn more and get started using the free, open-source Open Science Framework for your own project management, archiving, manuscript sharing, and research registration.</p><p><a>TOP Guidelines</a>: The Transparency and Openness Promotion Guidelines are a collective effort to improve transparency and reproducibility across disciplines.</p><h3><a></a>About the Project</h3><p>The Reproducibility Project: Psychology began in November 2011, finished primary data collection in December 2014, and published a summary of the results in August 2015. The project was coordinated by the <a>Center for Open Science</a>. Replication teams followed a research protocol and received logistical assistance as they collected materials, identified the key finding for replication, ran their experiment, conducted analyses, and reported their findings.</p><p>As stated in an initial report from 2012, \"The Reproducibility Project uses an open methodology to test the reproducibility of psychological science. It also models procedures designed to simplify and improve reproducibility\" (<a>Open Science Collaboration, 2012</a>). To that end, all project materials, data, and findings are posted on the <a>Open Science Framework</a>, a free service of the <a>Center for Open Science</a>.  Moreover, the project models reproducibility by making it easy to <a>reproduce the analyses</a> of each individual project, and the results of the aggregate report.</p><p>As the first in-depth exploration of its kind, the project results provide insight into reproducibility and its correlates. With a large, open dataset, many additional research questions can be investigated.</p><p>The project was designed to be a collaborative endeavor. Ultimately over 270 contributors earned authorship on the summary report and 86 others provided volunteer support. Replication teams designed, ran, and reported their replication studies. Brian Nosek, Johanna Cohoon, and Mallory Kidwell provided project coordination. Marcel van Assen, Chris Hartgerink, and Robbie van Aert led the analysis of results, Fred Hasselman generated the figures, and Sacha Epskamp led the analysis audit. Scores of additional volunteers assisted with coding of articles, analyses, and administrative tasks.</p><p>Since its inception, other similar initiatives have begun in other scientific domains. The Center for Open Science coordinates one of these such efforts, the <a>Reproducibility Project: Cancer Biology</a>.</p><p>Questions about the project can be directed to rpp@cos.io.</p></div>";
    return [{
      name: 'Correlation\'s effect on causation',
      wiki: 'wikiwiki',
      components: [{
        name: 'Component 1',
        link: 'profile.about'
      }, {
        name: 'Component 2',
        link: 'profile.collaborators'
      }],
      collaborators: ['Braswell, E.', 'Ehsan, S.', 'Fairchild, C.', 'Marsh, L.', 'Pfeiffer, N.', 'Spies, J.', 'Swenson, B.', 'Tordoff, J.'],
      year: 2015,
      stats: {
        views: 15
      },
      attributes: {
        registered: false,
        created: '5/3/2015',
        modified: '6/7/2016'
      },
    }, {
      name: 'Causation\'s effect on correlation',
      wiki: wiki,
      components: [{
        name: 'Component 1',
        link: 'profile.activity'
      }],
      collaborators: ['Braswell, E.', 'Ehsan, S.'],
      year: 2015,
      stats: {
        views: 24
      },
      attributes: {
      registered: true,
      created: '9/3/2016',
      modified: '2/6/2016',
      },
    }, {
      name: 'Independent study',
      wiki: 'something else!',
      components: [{
        name: 'Component 1',
        link: 'profile.activity'
      }, {
        name: 'Component 2',
        link: 'profile.about'
      }],
      collaborators: ['Marsh, L.'],
      year: 2015,
      stats: {
        views: 10
      },
      attributes: {
      registered: false,
      created: '8/12/2015',
      modified: '8/12/2015',
    },
    }, {
      name: 'Framework For the Furthering of Initiatives With Regard to Openness Within Science',
      wiki: wiki,
      collaborators: ['Swenson, B.'],
      year: 2015,
      stats: {
        views: 91
      },
      attributes: {
      registered: false,
      created: '7/23/2015',
      modified: '1/10/2016',
      },
    }, {
      name: 'Personal Research',
      wiki: 'something else!',
      components: [{
        name: 'Component 1',
        link: 'profile.activity'
      }, {
        name: 'Component 2',
        link: 'profile.collaborators'
      }],
      collaborators: ['Marsh, L.'],
      year: 2016,
      stats: {
        views: 1
      },
      attributes: {
      registered: true,
      created: '3/7/2016',
      modified: '5/18/2016',
    },
    }, {
      name: 'Top Secret Research',
      year: 2000,
      private: true
    }];
  },
});
