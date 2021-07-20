const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1890ff', // primary color for all components
              // '@link-color': '#1890ff', // link color
              // '@success-color': '#52c41a', // success state color
              // '@warning-color': '#faad14', // warning state color
              // '@error-color': '#f5222d', // error state color
              // '@font-size-base': '14px', // major text font size
              // '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
              // '@text-color: rgba': 'rgba(0, 0, 0, 0.65)', // major text color
              // '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
              // '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
              // '@border-radius-base': '5px', // major border radius
              // '@border-color-base': '#d9d9d9', // major border color
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
