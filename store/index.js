export const state = () => ({
  zones: [
    {
      id: 'torreon-coah',
      name: 'Torreón, Coah',
      code: 'trn012020',
      playlists: [
        {
          id: 1,
          name: 'promo-1-torreon',
          frame: '',
          videos: [
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1naJa84-8ot1eIcW48bIFbrKQpU2Apa6G',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1Xn3sw9UZfFcTe25f_tIqxFHHPEYCqxKp',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1NPNe5RYOasw2MTPYvwi6oSLmRA_CVIf9',
                  type: 'video/mp4'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'promo-2-torreon',
          frame: '',
          videos: [
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1QqH6dZYgTm8R6p73NG2iOQo8zf590tcd',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=13sjYcz5c3Wqv2Qcl12M4zQIfuNkuOnjX',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1FxK7gLq8QnVnSJVzb0mPgMmKBCjDcoHX',
                  type: 'video/mp4'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'saltillo-coah',
      name: 'Saltillo, Coah',
      code: 'slt012020',
      playlists: [
        {
          id: 3,
          name: 'promo-1-saltillo',
          frame: '',
          videos: [
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=18CRTmylrtctpjb19QZycVc1RbqbCimd2',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1ppoa9CwLlN3GObXmXqi8j5xcy5E0SXHt',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1MtyOOBvOflSHymx4p1obKgkZzAfVynUb',
                  type: 'video/mp4'
                }
              ]
            },
            {
              sources: [
                {
                  src: 'https://drive.google.com/uc?export=download&id=1UQj_ObX79oGAjPtYVD3elSJ1Zy9VFXUV',
                  type: 'video/mp4'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

export const getters = {
  getZone (state) {
    return index => state.zones.filter(zone => zone.id === index)[0]
  }
}
