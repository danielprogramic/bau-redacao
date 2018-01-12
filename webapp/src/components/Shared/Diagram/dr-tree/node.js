const isLeaf = (data, prop) => {
  return !(Array.isArray(data[prop]) && data[prop].length > 0)
}

export const renderNode = (h, data, context) => {
  const { props } = context
  const cls = ['org-tree-node']
  const childNodes = []
  const children = data[props.props.children]

  if (isLeaf(data, props.props.children)) {
    cls.push('is-leaf')
  } else if (props.collapsable && !data[props.props.expand]) {
    cls.push('collapsed')
  }

  childNodes.push(renderLabel(h, data, context))

  if (!props.collapsable || data[props.props.expand]) {
    childNodes.push(renderChildren(h, children, context))
  }

  return h('div', {
    domProps: {
      className: cls.join(' ')
    }
  }, childNodes)
}

export const renderBtn = (h, data, context) => {
  const { props } = context
  const expandHandler = context.listeners['on-expand']

  let cls = ['org-tree-node-btn']

  if (data[props.props.expand]) {
    cls.push('expanded')
  }

  return h('span', {
    domProps: {
      className: cls.join(' ')
    },
    on: {
      click: e => {
        e.stopPropagation()
        expandHandler && expandHandler(data)
      }
    }
  })
}

export const renderLabel = (h, data, context) => {
  const { props } = context
  const label = data[props.props.label]
  const renderContent = props.renderContent
  const clickHandler = context.listeners['on-node-click']

  const childNodes = []
  let vnode = renderContent(h, data, context)
  vnode && childNodes.push(vnode)


  if (props.collapsable && !isLeaf(data, props.props.children)) {
    childNodes.push(renderBtn(h, data, context))
  }

  const cls = ['org-tree-node-label-inner']
  let { labelWidth, labelClassName } = props
  if (typeof labelWidth === 'number') {
    labelWidth += 'px'
  }
  if (typeof labelClassName === 'function') {
    labelClassName = labelClassName(data)
  }
  labelClassName && cls.push(labelClassName)

  return h('div', {
    domProps: {
      className: 'org-tree-node-label'
    }
  }, [h('div', {
    domProps: {
      className: cls.join(' '),
    },
    style: { width: labelWidth },
    on: {
      click: e => clickHandler && clickHandler(e, data)
    }
  }, childNodes)])
}

export const renderChildren = (h, list, context) => {
  if (Array.isArray(list) && list.length) {
    const children = list.map(item => {
      return renderNode(h, item, context)
    })

    return h('div', {
      domProps: {
        className: 'org-tree-node-children'
      }
    }, children)
  }
  return ''
}

export const render = (h, context) => {
  const { props } = context
  return renderNode(h, props.data, context)
}

export default render