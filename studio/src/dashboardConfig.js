export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6000b2d29ab64c54367fefaa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-recipe-site-studio',
                  apiId: '0f3fdb26-9151-4b10-bbde-575ac1f3dc07'
                },
                {
                  buildHookId: '6000b2d21a76d84d5ff1bfc1',
                  title: 'Recipe Website',
                  name: 'sanity-gatsby-recipe-site',
                  apiId: '74696695-1dc8-469e-b95e-afe1be9e4dae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cdlangen/sanity-gatsby-recipe-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-recipe-site.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent recipes', order: '_createdAt desc', types: ['recipe'] },
      layout: { width: 'medium' }
    }
  ]
}
