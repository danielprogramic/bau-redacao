<template>
  <div id="app">
    <div style="position:fixed; margin-top:200px;margin-left:200px;" class="controls">
      <div>
        <label>Adjust width</label>
        <input type="range" v-model="settings.width" min="0" max="100" />
      </div>
    </div>
    <div class="svg-container" :style="{width: settings.width + '%'}">
      <svg id="svg" pointer-events="all" viewBox="0 0 960 600" preserveAspectRatio="xMinYMin meet">
                <g :id="links"></g>
                <g :id="nodes"></g>
            </svg>
    </div>
  </div>
</template>
<script>
  import coisa from './animate-force-data'
  import * as d3 from "d3"
  export default {
    name: "app",
    components: {

    },
 data: function() { 
        return {
          graph: null,
          simulation: null,
          color: d3.scaleOrdinal(d3.schemeCategory20),
          coloca: {
            "nodes": [{
              "id": "Alice",
              "name": "Tanus"
            }, {
              "id": "Bob",
              "name": "Tanus"
            }, {
              "id": "Carol",
              "name": "Tanus"
            }],
            "links": [{
              "source": 0,
              "target": 1
            }, {
              "source": 1,
              "target": 2
            },
             {
              "source": 0,
              "target": 2
            }]
          },
          settings: {
            strokeColor: "#29B5FF",
            width: 100,
            svgWigth: 960,
            svgHeight: 600
          }
        };
      },
      mounted: function() {
        var that = this;
        that.graph = this.coloca;
        that.simulation = d3.forceSimulation(that.graph.nodes)
          .force("link", d3.forceLink(that.graph.links).distance(100).strength(0.1))
          .force("charge", d3.forceManyBody())
          .force("center", d3.forceCenter(that.settings.svgWigth / 2, that.settings.svgHeight / 2))

      },
      computed: {
        nodes: function() {
          var that = this;
          if (that.graph) {
            return d3.select("svg").append("g")
              .attr("class", "nodes")
              .selectAll(".node")
              .data(that.graph.nodes)
              .enter().append("circle")
              .attr("r", 20)
              .attr("fill", function(d, i) {
                return that.color(i);
              })
              .on("click", function(d){
                console.log(d)
              })
              .call(d3.drag()
                .on("start", function dragstarted(d) {
                  if (!d3.event.active) that.simulation.alphaTarget(0.3).restart();
                  d.fx = d.x;
                  d.fy = d.y;
                })
                .on("drag", function dragged(d) {
                  d.fx = d3.event.x;
                  d.fy = d3.event.y;
                })
                .on("end", function dragended(d) {
                  if (!d3.event.active) that.simulation.alphaTarget(0);
                  d.fx = null;
                  d.fy = null;
                }))
          }
        },
        links: function() {
          var that = this;
          if (that.graph) {
            return d3.select("svg").append("g")
              .attr("class", "links")
              .selectAll("line")
              .data(that.graph.links)
              .enter().append("line")
              .attr("stroke-width", function(d) {
                return Math.sqrt(d.value);
              });
          }
        },
        text: function() {
          var that = this;
          if (that.graph) {
            return d3.select("svg").append("g")
              .selectAll("text")
              .data(that.graph.nodes)
              .enter().append("text")
                .attr("dx", 100)
                .attr("dy", 40)
                .style("color", "#fff")
                .style("font-family", "overwatch")
                .style("font-size", "18px")
                .text(function (d) {
                    console.log(d.name)
                    return d.name
                })
          }
        },

      },
      updated: function() {
        var that = this;
        that.simulation.nodes(that.graph.nodes).on('tick', function ticked() {
          that.links
            .attr("x1", function(d) {
              return d.source.x;
            })
            .attr("y1", function(d) {
              return d.source.y;
            })
            .attr("x2", function(d) {
              return d.target.x;
            })
            .attr("y2", function(d) {
              return d.target.y;
            });

          that.nodes
            .attr("cx", function(d) {
              return d.x;
            })
            .attr("cy", function(d) {
              return d.y;
            });
        });
      }
  };
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
    body {
      width: 100%;
      height: 100%;
      font-family: monospace;
    }
    
    .controls {
      position: fixed;
      top: 16px;
      left: 16px;
      background: #f8f8f8;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
    }
    
    .svg-container {
      display: table;
      border: 1px solid #f8f8f8;
      box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    }
    
    .controls>*+* {
      margin-top: 1rem;
    }
    
    label {
      display: block;
    }
    
    .links line {
      stroke: #999;
      stroke-opacity: 0.6;
    }
    
    .nodes circle {
      stroke: #fff;
      stroke-width: 4px;
    }
</style>
